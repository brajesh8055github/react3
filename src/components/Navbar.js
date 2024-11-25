import React from 'react'
import cart from '../images/shop.png'
import like from '../images/like.png'
import user from '../images/google.png'
const Navbar = () => {
    return (
        <div className='navbar' style={{padding:"0 20px"}}>
             <div className='nav-left'>
                <div>
                    <h1 style={{color:"white"}}>E Shop</h1>
                </div>
                <p>Home</p>
                <p>Product</p>
                <p>Category</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
            <div className='nav-right'>
                <img src={cart} alt='img'></img>
                <img src={like} alt='img'></img>
                <img src={user} alt='img'></img>
            </div>
        </div>
    )
}

export default Navbar