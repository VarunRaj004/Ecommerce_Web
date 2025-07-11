import React from "react";
import "./shop.css"
import { ShopContext } from "../../context/shopcontext";
import { useContext } from "react";


export const Product = (props) => {
    const {cart,addToCart} = useContext(ShopContext);

    const {id, name, price , image} = props.data;

    const cartAmount = cart[id];

    return (
        <div className="product">
            <img src={image}  />
            <div className="description">
                <h3 className = "shopTitle">{name}</h3>
                <p>${price}</p>
            </div>
          <button className = "addToCartButtn" onClick={() => addToCart(id)}>Add to Cart {cartAmount > 0 && <>({cartAmount})</>}</button>
        </div>
    )
}