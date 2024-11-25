import React from 'react'
import shipping from '../images/free-shipping.png' 
import fast from '../images/fast-delivery.png' 
import like from '../images/like.png' 
const Banner = () => {
  return (
    <>
    <div className='banner' style={{padding:"0 20px"}}>
        <div className='s-banner'>
            <img src={shipping} alt='shipping'></img>
            <div className='shipp-flex'>
                <h4>Free Shipping</h4>
                <p>on orders over $100</p>
            </div>
            </div>
            <div className='s-banner'>
            <img src={fast} alt='fast'></img>
            <div className='shipp-flex'>
                <h4>Free Shipping</h4>
                <p>on orders over $100</p>
            </div>
            </div>
            <div className='s-banner'>
            <img src={like} alt='like'></img>
            <div className='shipp-flex'>
                <h4>Free Shipping</h4>
                <p>on orders over $100</p>
            </div>
            </div>
            
    </div>
    <div className='subscribe'>
    <p>Subscribe To The E Shop Store For Latest Update.</p>
    <input type='text' placeholder='Enter your Email.'></input>
    <button className='btn-b'>SUBSCRIBE</button>
    </div>
    </>
  )
}

export default Banner