import React, { useEffect, useState } from 'react';
import Card from '../../Card/Card';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Product from '../Product/Product';
import './shop.css'

const Shop = () => {
    const [products, setProduct]=useState([]);
    const [card , setCard] =useState([]);


    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[]);

// local storage 
useEffect(() => {
    if (products.length) {
        const savedCart = getStoredCart();
        const storedCart = [];
        for (const key in savedCart) {
            const addedProduct = products.find(product => product.key === key);
            if (addedProduct) {
                const quantity = savedCart[key];
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct);
            }
        }
        setCard(storedCart);
    }
}, [products])


// ----------------->
  
  const handlAddToCard = (product) =>{
    const newCard = [...card, product];
    setCard(newCard);
    addToDb(product.key)

  }

  
    return (
        <div>
            


           <div className="shop-container">
               <div className="product-countainer">
                  
                   {
                       products.map(product => <Product
                       key={product.key}
                         product={product}
                         handlAddToCard={handlAddToCard}
                         ></Product>)
                   }
               </div>
      
           <div className="card-product">
                    <div >
                  <Card card={card}></Card>
               </div>
           </div>
             
           </div>
        </div>
    );
};

export default Shop;