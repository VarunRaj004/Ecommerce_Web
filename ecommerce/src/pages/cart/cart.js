import React from 'react';
import {products} from "../../products.js"
import { ShopContext } from '../../context/shopcontext';
import { useContext } from 'react';
import { CartItem } from './cartitem';
import {useNavigate} from 'react-router-dom';


export const Cart = () => {
    const {cart , getTotal} = useContext(ShopContext)
    const total = getTotal();
    const navigate = useNavigate();


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

            {total > 0 ? 

                <div className="total">
                    <p>Total : ${total}</p>
                    <button>Checkout</button>
                    <button onClick = {() => navigate("/")}>Continue Shopping</button>
                </div>
            
            
        : <p>Your Cart is Empty</p>}

            </div>
        </div>

    );

}