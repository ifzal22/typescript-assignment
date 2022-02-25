import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart = products =>{
    const [cart , setCart] = useState([])
   
    useEffect( () =>{
        if(products.length){
            const saveCart = getStoredCart();
            const stordCard = [];
            for(const key in saveCart){
                const addedProduct = products.find(product => product.key === key);
                if(addedProduct){
                    const quantiy = saveCart[key];
                    addedProduct.quantiy = quantiy;
                    stordCard.push(addedProduct)
                }

            }
            setCart(stordCard)
        }
       
    } , [products])
    return[cart]
}
export default useCart;