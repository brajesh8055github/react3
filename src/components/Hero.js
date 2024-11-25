import React from 'react'
import watch from '../images/watch2.png'
import arrow from '../images/arrow.png'
const Hero = () => {
  return (
    <>
    <div className='hero' style={{padding: " 0 20px"}}>
        <div style={{paddingTop:"50px"}}>
            <h1>Best Deal <br></br>Awesome Product</h1>
            <p>A vibrant display, high-speed performance</p>
            <button className='btn-hero'>Shop Now</button>
        </div>
        <img src={watch} alt='img'></img>
    </div>
    <div className='up-arrow'>
      <img src={arrow} alt='img'></img>
    </div>
    </>
  )
}

export default Hero