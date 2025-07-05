import React from "react";

export const Product = (props) => {
    const {id, title, price, image} = props.data;
    return (
        <div className="product">
            <img src={image}  />
            <div className="product-info">
                <h3>{title}</h3>
                <p>${price}</p>
            </div>
        </div>
    )
}