import React from 'react'
import right from '../images/right-arrow.png'
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'

const Footer = () => {
  return (
    <div className='footer' style={{padding:"0 20px"}}>
        <div>
            <h2>E Shop</h2>
            <p>Karachi</p>
            <p>Karachi</p>
            <p>Karachi</p>
            <p>Phone: +00000000000000000</p>
            <p>Email: info@E-Shop.com</p>
        </div>
        <div>
             <h4>Useful Links</h4>
             <div className='s-footer'>
             <img src={right} alt='img'></img>
             <p>Home</p>
             </div>
             <div className='s-footer'>
             <img src={right} alt='img'></img>
             <p>About us</p>
             </div>

             <div className='s-footer'>
             <img src={right} alt='img'></img>
             <p>Services</p>
             </div>
             <div className='s-footer'>
             <img src={right} alt='img'></img>
             <p>Terms of service</p>
             </div>
             <div className='s-footer'>
             <img src={right} alt='img'></img>
             <p>Privacy Policy</p>
             </div>
        </div>
        <div>
           <h4>Our Services</h4>
           <div className='s-footer'>
             <img src={right} alt='img'></img>
             <p>T-Shirt</p>
             </div>
             <div className='s-footer'>
             <img src={right} alt='img'></img>
             <p>Shoes</p>
             </div>
             <div className='s-footer'>
             <img src={right} alt='img'></img>
             <p>Pants</p>
             </div>
             <div className='s-footer'>
             <img src={right} alt='img'></img>
             <p>Laptop</p>
             </div>
             <div className='s-footer'>
             <img src={right} alt='img'></img>
             <p>Smart Phone</p>
             </div>
        </div>
        <div>
             <h4>Our Social Networks</h4>
             <p>lorem ipsum sit annet construct scddefada elit.</p>
             <div className='s-footer'>
                 <img src={twitter} alt=''></img>
                 <img src={facebook} alt=''></img>
             </div>
        </div>
    </div>
  )
}

export default Footer