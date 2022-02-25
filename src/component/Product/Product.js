import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    console.log(props.product)
    const {name , price , img ,seller,stock,star}= props.product
    const element = <FontAwesomeIcon icon={ faShoppingCart} />
    return (

        
        <div className="product">
           
      
            <div className="img">
                <img src={img} alt="" />
            </div>
      <div className="product-discribe">
      <h5 className="product-name">{name}</h5>
       <p>BY:{seller}</p>
       <p>Price:{price}</p>

       <p className="star"> <Rating readonly
       initialRating={star}
       fullSymbol="fas fa-star fa-2px"
       emptySymbol="far fa-star fa-2px">
           </Rating></p>
       
       <p><small>only {stock} left in stock - order soon</small></p>
       <button  onClick= { ()=>props.handlAddToCard(props.product)} className="BTN">{element}  add card</button>
      </div>
        </div>
    );
};

export default Product;