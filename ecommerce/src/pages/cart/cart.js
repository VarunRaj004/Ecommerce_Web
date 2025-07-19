import React from 'react';
import {products} from "../../products.js"
import { ShopContext } from '../../context/shopcontext';
import { useContext } from 'react';
import { CartItem } from './cartitem';


export const Cart = () => {
    const {cart} = useContext(ShopContext)

    return (
        <div className = "cart">
            Cart
            <div className = "cartItems">
                {products.map((prod) => {
                    if(cart[prod.id] !== 0){
                        return <CartItem data={prod} />
                    }
                    return null;     
                })}
            </div>
        </div>

    );

}