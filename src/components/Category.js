import React from 'react'
import slide1 from '../images/slide1.png'
import slide2 from '../images/slide2.png'
import slide3 from '../images/slide3.png'
import slide4 from '../images/slide4.png'
import slide5 from '../images/slide5.png'
import slide6 from '../images/slide6.png'
import slide7 from '../images/slide7.png'
import slide8 from '../images/slide8.png'
import left from '../images/left-arrow.png'
import right from '../images/right-arrow.png'

const Category = () => {
  return (
    <>
    <div className='category' style={{padding:" 0 20px"}} id='category'>
        <h1 className='py-4 text-center text-3xl font-bold'>All Category</h1>
        <ul>
            <li>T-Shirts</li>
            <li>Shoes</li>
            <li>Hoodies</li>
            <li>Cap</li>
            <li>Pants</li>
            <li>Laptop</li>
            <li>Keyboard</li>
            <li>Cameras</li>
            <li>Computer Mouse</li>
            <li>iPad & Tablets</li>
        </ul>

        </div>
        <div className='slide'>
          <div className='left-icon'>
          <img src={left} alt='img'></img>
          </div>
          <div className='card-s'>
            <img src={slide1} alt='img'></img>
            </div>
            <div className='card-s'>
            <img src={slide6} alt='img'></img>
            </div>
            <div className='card-s'>
            <img src={slide3} alt='img'></img>
            </div>
            <div className='card-s'>
            <img src={slide5} alt='img'></img>
            </div>
            
            <div className='left-icon'>
          <img src={right} alt='img'></img>
          </div>
            
        </div>


        



        <div style={{padding:"0 20px"}}>
        <h2 className="text-3xl font-bold py-2">Products :</h2>
        <p>A sleek and powerful mobile phone featuring a vibrant display, high-speed performance, long-lasting battery, and advanced camera system, designed to keep you connected and productive on the go. Packed with cutting-edge features, it ensures a seamless user experience for work, play, and everything in between.</p>

        <h2 className="text-3xl font-bold py-2">About :</h2>
        <p>E-commerce refers to the buying and selling of goods and services online. It enables businesses to reach global customers through digital platforms, offering convenience, variety, and secure payment options. From retail shopping to subscription services, e-commerce transforms the way people access products, bridging businesses and consumers in a fast, efficient, and accessible manner.</p>
        </div>
        </>
  )
}

export default Category