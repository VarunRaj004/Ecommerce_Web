import React from 'react';
import Products from './products.js';


export const Shop = () => {
    return (
        <div className = "shop">
            <h1>Shop Page</h1>
            <div className="products">
                {Products.map((item)=>{
                    <Product data={item} />

                })}

            </div>
         </div>    
        
    )
}