import React from 'react'
import arrow from '../images/arrow.png'
const Hero = () => {
  return (
    <>
    <div className='hero' style={{padding:" 0 20px"}}>
        <div className='hero-text'>
            <h1 className="text-3xl font-bold text-white-500">Best Deal <br></br>Awesome Product</h1>
            <p>A vibrant display, high-speed performance</p>
            <button className='btn-hero'>Shop Now</button>
        </div>
    </div>
    <div className='up-arrow'>
      <img src={arrow} alt='img'></img>
    </div>
    </>
  )
}

export default Hero