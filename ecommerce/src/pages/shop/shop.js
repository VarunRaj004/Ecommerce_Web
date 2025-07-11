import React from 'react';
import {products} from '../../products.js'
import { Product } from './product.js';
import './shop.css';


export const Shop = () => {
    return (
        <div className = "shop">
            <h1>Shop Page</h1>
            <div className="products">
                {products.map((item)=> (
                    <Product data={item} />

                ))}
            </div>
            
         </div>    
        
    )
}