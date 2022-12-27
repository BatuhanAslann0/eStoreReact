import React , {useContext} from 'react'
import { CartContext } from '../../Context/CartContext'
import './AddedItems.css'

const AddedItems = () => {

    const { items, cartItemCount , setCartItemCount}= useContext(CartContext)

    const incrementCount = (idx) => {
        const currentCount = cartItemCount[idx]
        const updatedCount = currentCount + 1
        setCartItemCount({...cartItemCount , [idx] : updatedCount})
    }
    const decrementCount = (idx) => {
        const currentCount = cartItemCount[idx]
        if(currentCount > 1){
            const updatedCount = currentCount - 1
            setCartItemCount({...cartItemCount , [idx] : updatedCount})
        } else {
            const updatedCount = currentCount - 1
            setCartItemCount({...cartItemCount , [idx] : updatedCount })
        }
    }

       const clearAll = () => {

           setCartItemCount({})
         
           if(Object.values(cartItemCount).every(count => count === 0)) {
             
         }
    }



     let allCost = 0
    items.forEach((item,idx) => {
        if(cartItemCount[idx] > 0){
            allCost += item.price * cartItemCount[idx]
        }
    })
   
  return (
      <div className='added-items-card-container'>
        <div className="items-area">
          {
          Object.values(cartItemCount).every(count => count === 0) ? (
          <h1 id='no-items' >There are no items in your cart for now.</h1>
          ) : (
            items.map((item , idx) => {
               if(cartItemCount[idx] > 0) {
                   return (
              <div key={idx} className="item-row">
                <img src={item.img} alt="image" />
                <h2>{item.name}</h2>
                <div className="added-item-info">
                    <p>price: $ {item.price}</p>
               <p>
                <button className='inc-dec' onClick={() => decrementCount(idx)}> - </button> {cartItemCount[idx]} <button className='inc-dec' onClick={() =>  incrementCount(idx)}> + </button>
               </p>
                <p className='item-single-total-price' >Total Price: $ {item.price * cartItemCount[idx]}</p>
                </div>
              </div>
                    )
                } 
              }) 
              
            )
         }
         {
         Object.values(cartItemCount).some(count => count !== 0) ? (
      <div>
        <div className="bottom-cart-container">
          <button onClick={clearAll} className="clear">
            Clear All
          </button>
          <h3>Total cost: $ {allCost}</h3>
        </div>
      </div>
    ) : null
        }
          </div>
      </div>
  )
}

export default AddedItems