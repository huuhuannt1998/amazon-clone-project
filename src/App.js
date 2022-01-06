import React, { useEffect} from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51KEM8EEFrzex5ziXEet2cSa4e6IMRYl6VzjK7XYAKSWSIyfSWNd8GbAMYhcciXpruYCfOPQm07Y1rMtwOua6LLzs00XhfvxFaX" //public key
);


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will run only one when the app component loads ...
    auth.onAuthStateChanged(authUser => {
      console.log(' THE USER IS: ', authUser);

      if (authUser) {
        // the user logged in for when users refresh the page
        
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
    <div className="app">

      <Switch>
       <Route path='/orders'>
          <Header />
          <Orders />
        </Route> 

        <Route path='/login'>
          <Login />
        </Route>        

        <Route path='/checkout'>
          <Header />
          <Checkout />
        </Route>

        <Route path='/payment'>
          <Header />
          <Elements stripe={promise}>
          <Payment />
          </Elements>
        </Route> 

        <Route path='/'>
          <Header />
          <Home />
        </Route>   

      </Switch>
    </div>
    </Router>
  );
}

export default App;
