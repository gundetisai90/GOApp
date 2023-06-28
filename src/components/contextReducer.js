import React, { createContext, useReducer } from 'react'
import { useContext } from 'react';


const CartStateContext = createContext();
const CartDispatchContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: action.id, name: action.name, img: action.img, price: action.price, qty: action.qty, size: action.size }]
        case "REMOVE":
                let newArr = [...state]
                newArr.splice(action.index, 1)
                return newArr;
        default:
            return console.log("Error in reducer");
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, []);
    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartStateContext);
export const useDispatch = () => useContext(CartDispatchContext);