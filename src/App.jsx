import React , { useState , useEffect } from 'react'
import { CartContext } from './Context/CartContext'
import {Routes , Route } from 'react-router-dom'
import CartRoute from './Routes/CartRoute'
import HomeRoute from './Routes/HomeRoute'
import cap from './Components/ItemCard/CardImages/cap.jpg'
import hoodie from './Components/ItemCard/CardImages/hoodie.jpg'
import hoodie2 from './Components/ItemCard/CardImages/hoodie2.jpg' 
import jordan from './Components/ItemCard/CardImages/jordan.jpg'
import jordanHoodie from './Components/ItemCard/CardImages/jordanHoodie.jpg'
import jordanShoe from './Components/ItemCard/CardImages/jordanShoe.jpg'
import jordanShoe2 from './Components/ItemCard/CardImages/jordanshoe2.jpg'
import pants2 from './Components/ItemCard/CardImages/pants2.jpg'
import pantsNike from './Components/ItemCard/CardImages/pantsNike.jpg'

const App = () => {

  const items = [{
        name:'Cap',
        price: 40,
        img: cap
    }, {
        name:'Pants',
        price: 70,
        img:pantsNike
    } , {
        name:'Air Jordan Hype',
        price: 170,
        img:jordanShoe2
    } , {
        name:'Air Jordan',
        price: 110,
        img:jordan
    },{
        name:'Hoodie',
        price: 150,
        img:jordanHoodie
    },{
        name:'Air Jordan Low',
        price: 110,
        img:jordanShoe
    },
    {
        name:'Hoodie',
        price: 150,
        img:hoodie2
    },{
        name:'Jordan SweatPants',
        price:  80 ,
        img:pants2
    },{
        name:'Hoodie',
        price: 140,
        img: hoodie
    }]

  const [cartItemCount, setCartItemCount] = useState(JSON.parse(localStorage.getItem('cartItemCount')) || {});

  useEffect(() => {
        localStorage.setItem('cartItemCount',JSON.stringify(cartItemCount))
    },[cartItemCount])


  return (
    <CartContext.Provider value={{ cartItemCount,setCartItemCount , items }} >
      <Routes>
      <Route path='/' element={<HomeRoute />} />
      <Route path='/cart' element={<CartRoute />} />
    </Routes> 
    </CartContext.Provider>
  )
}

export default App