import React from 'react';
import './Card.css'

const Card = (props) => {
const {card} = props;

const totalReduce = (previous, product)=> previous + product.price;

let total = card.reduce(totalReduce,  0);


const shipping = total > 0 ? 15: 0;



const tax = (total + shipping) * 0.10;
const grandTotal = total + shipping + tax;

// let total = 0;
// for(const product of card ){
//     total = total + product.price;
// }
    return (
        <div className="CART">
             <h2>Order Summary</h2>
                   <h3>Items orders:  {props.card.length}</h3>
                   <p>Shipping: {shipping}</p>
                   <p>Tex: {tax.toFixed(2)}</p>
                   <p>Total:$ {total.toFixed(2)}</p>
                   <h2 style={{color:'red'}}>Grand Total: {grandTotal.toFixed(2)}</h2>
        </div>
    );
};

export default Card;