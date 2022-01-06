// For data layer
export const initialState = {
    basket : [],
}

// Selector
export const getBasketTotal = (basket) => 
    basket.reduce((amount, item) => item.price + amount, 0);

// reducer for pushing the data to data layer
const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET': 
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.title === action.title);

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);

            } else{
                console.warn("Can't remove product ");
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'EMPTY_BASKET':
            return{
                ...state,
                basket:[]
            }
        default:
            return state;
    }
};

export default reducer;