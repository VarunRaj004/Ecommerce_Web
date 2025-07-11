import React from "react";
import { products } from "../products.js";

import { createContext, useState } from "react";

export const ShopContext = createContext(null);

const getCart = () => {
    const cart = {}
    for(let i =1 ; i < (products.length+1); i++) {
        cart[i] = 0 ;
    }
    return cart ;
}


export const ShopContextProvider = (props) => {

    const [cart,setCart] = useState(getCart());

    const addToCart = (itemId) => {
        setCart((prev) => ({...prev , [itemId]:prev[itemId]+1}))
    }

    const rmvFromCart = (itemId) => {
    setCart((prev) => ({...prev , [itemId]:prev[itemId]-1}))
    }

    const passValue = {cart , addToCart, rmvFromCart};
    return (
        <ShopContext.Provider value={passValue}>{props.children}</ShopContext.Provider>
    )
}