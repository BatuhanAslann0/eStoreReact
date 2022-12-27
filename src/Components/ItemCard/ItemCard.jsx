import React , { useState , useEffect , useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import './ItemCardStyles.css'


const ItemCard = () => {


    const { cartItemCount , setCartItemCount , items } = useContext(CartContext)


    const addToCart = (idx) => {
        const currentCount = cartItemCount[idx] || 0
        const updatedCount = currentCount + 1 
        setCartItemCount({...cartItemCount , [idx] :updatedCount})
    }

  return (
    <div className="item-card-big-container">   
         {
            items.map((item, idx) => {
             return (
       <div key={idx} className="item">
            <img className='item-img' src={item.img} alt="" />
             <div className="item-info">
                <h2>{item.name}</h2>
                <p>$ {item.price}</p>
             </div>
            <button onClick={() => addToCart(idx)} className='add-button'>Add To Cart</button>
            {cartItemCount[idx] >= 1 ? <p className='item-count'>({cartItemCount[idx]})</p> : <p></p> }
       </div>
            )
             } )
         }
    </div>
  )
}

export default ItemCard