import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useProducts from '../../hocks/UseProducts';
import useCart from '../../hocks/useCart';

const OrderReview = () => {
    const [products,setProducts] = useState([]);
    const [cart] = useCart(products)
    useEffect( ()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
   
    return (
        <div>
            <h1>{products.length}</h1>
            <h1>{cart.length}</h1>
            <h2>This is order revirw</h2>
        </div>
    );
};

export default OrderReview;