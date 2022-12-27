import React , {useContext} from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import './NavbarStyles.css'


const Navbar = () => {

  const { cartItemCount } = useContext(CartContext)


let totalItemCount = 0;
Object.values(cartItemCount).forEach(count => {
  totalItemCount += count;
});

  return (
    <div className='navbar-container'>
        <div className="navbar">
            <h1>Hiphop Store</h1>
            <div className="navbar-elements">
                <Link className='a' to='/'>Home</Link>
                <Link className='a' to='/cart'>Cart ({totalItemCount})</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar