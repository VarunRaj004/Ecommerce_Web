import React from 'react';
import { ShopContext } from '../../context/shopcontext';
import { useContext } from 'react';


export const CartItem = (props) => {

    const  { cart, addToCart , rmvFromCart , updateCartItem } = useContext(ShopContext);

    const {id ,name,price ,image} = props.data;
    
    return (

    <div className = "cartItem">
        <img src= {image } />
        <div className="description">
            <p><b>{name}</b></p>
            <p>${price}</p>
        </div>
            <button onClick={() => rmvFromCart(id)}>-</button>
            <input value= {(cart[id])} onChange={(e) => updateCartItem(Number(e.target.value),id)}/>
            <button onClick={() => addToCart(id)}>+</button>
        <div>

        </div>
    </div>
)
}