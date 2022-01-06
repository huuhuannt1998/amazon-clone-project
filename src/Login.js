import React, {useState} from 'react'
import "./Login.css"
import {Link, useHistory} from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        // firebase login
        auth  
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault();
        // firebase register
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // sccessfully created a new user with email and password
            if (auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message))
    }
    
    return (
        
        <div className="login">
            <Link to="/">
            <img className="login_logo" src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' alt=""/>
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange =
                    {e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange =
                    {e => setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn} className="login_signInButton">Sign in</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON-CLONE-PROJECT Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className="login_registerButton" onClick={register}>Create your Amazon Account</button>

            </div>
        </div>
        
    )

}

export default Login