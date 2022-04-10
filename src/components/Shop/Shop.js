import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
 const [products,setProducts]=useProducts()
  
 const [cart,setCart]=useState([])
   
  useEffect(()=>{
    const storedCart = getStoredCart();
      const savedCart =[]
    for (const id  in storedCart){
       const addedProducts =products.find( product => product.id)
       if(addedProducts){
        const quantity = storedCart[id];
        addedProducts.quantity =quantity;
        savedCart.push(addedProducts);
         
       }
       setCart(savedCart);
     }
  },[products])
  

   const handleClick =(Selectedproduct)=>{
      let newCart =[]
    const  exists =cart.find (product =>product.id === Selectedproduct.id);
    if(!exists){
      Selectedproduct.quantity =1;
      newCart =[...cart, Selectedproduct];
      
}
else{
const rest =cart.filter(product =>product.id !==Selectedproduct.product)
exists.quantity= exists.quantity+1;
newCart =[...rest,exists]
}
 
       setCart(newCart)
     addToDb(Selectedproduct.id)
     }
  
   
   
    return (
        <div className='shop-container'>
          <div className="products-container">
                  

                {
                  products.map(product=><Product key={product.id} product={product}handleClick={handleClick} ></Product>)
                }
         
          </div>
        
          <div className="cart-container">
             <Cart cart={cart}>

          <Link to="/orders">
             <button>Review Order</button>
          </Link>
             </Cart>
          </div>
        </div>

    );
};

export default Shop;




