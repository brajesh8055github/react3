import React from 'react'
import shipping from '../images/free-shipping.png' 
import fast from '../images/fast-delivery.png' 
import like from '../images/like.png' 
const Banner = () => {
  return (
    <>
    <div className='banner p-10 m-5'>
        <div className='s-banner'>
            <img src={shipping} alt='shipping'></img>
            <div className='shipp-flex'>
                <h4 className="text-2xl font-bold">Free Shipping</h4>
                <p>on orders over $100</p>
            </div>
            </div>
            <div className='s-banner'>
            <img src={fast} alt='fast'></img>
            <div className='shipp-flex'>
                <h4 className="text-2xl font-bold">Fast Delivery</h4>
                <p>World Wide</p>
            </div>
            </div>
            <div className='s-banner'>
            <img src={like} alt='like'></img>
            <div className='shipp-flex'>
                <h4 className="text-2xl font-bold">Big Choice</h4>
                <p>of Products</p>
            </div>
            </div>
            
    </div>
    <div className='subscribe'>
    <p className='py-4 font-medium'>Subscribe To The E Shop Store For Latest Update.</p>
    <input type='text' placeholder='Enter your Email.'></input>
    <button className='btn-b'>SUBSCRIBE</button>
    </div>
    </>
  )
}

export default Banner