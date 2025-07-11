import React from "react";
import "./shop.css"

export const Product = (props) => {
    const {id, name, price , image} = props.data;
    return (
        <div className="product">
            <img src={image}  />
            <div className="description">
                <h3 className = "shopTitle">{name}</h3>
                <p>${price}</p>
            </div>
          <button className = "addToCartButtn">Add to Card</button>
        </div>
    )
}