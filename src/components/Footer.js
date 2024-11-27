import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer' style={{ padding: "40px 20px" }}>
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
          <FaTwitter className='footer-icon' />
          <FaInstagramSquare className='footer-icon' />
          <FaLinkedin className='footer-icon' />
          <FaFacebookSquare className='footer-icon' />
          <FaTwitter className='footer-icon' />
        </div>
      </div>
    </div>
  )
}

export default Footer