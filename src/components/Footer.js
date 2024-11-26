import React from 'react'
import right from '../images/right-arrow.png'
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'

const Footer = () => {
  return (
    <div className='footer' style={{padding:"40px 20px"}}>
        <div>
            <h2 className="text-2xl font-bold text-yellow-500">E Shop</h2>
            <p className='py-2'>Mumbai</p>
            <p className='py-2'>Delhi</p>
            <p className='py-2'>Patna</p>
            <p className='py-2'>Phone: +00000000000000000</p>
            <p className='py-2'>Email: info@E-Shop.com</p>
        </div>
        <div>
             <h4 className="text-2xl font-bold">Useful Links</h4>
             {/* <div className='s-footer'>
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
             </div> */}

             <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/'>About us</a></li>
              <li><a href='/'>Services</a></li>
              <li><a href='/'>Terms of Servive</a></li>
              <li><a href='/'>Privacy Policy</a></li>
             </ul>
        </div>
        <div>
           <h4 className="text-2xl font-bold">Our Services</h4>
           {/* <div className='s-footer'>
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
             </div> */}

<ul>
              <li><a href='/'>T-Shirt</a></li>
              <li><a href='/'>Shoes</a></li>
              <li><a href='/'>Pants</a></li>
              <li><a href='/'>Laptop</a></li>
              <li><a href='/'>Samrt Phone</a></li>
             </ul>
        </div>
        <div>
             <h4 className="text-2xl font-bold">Our Social Networks</h4>
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