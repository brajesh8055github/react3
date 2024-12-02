import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'
import Footer from './Footer';
const ProductDetails = () => {
    const location = useLocation();

    const[count,setCount] = useState(0)

function handleDec(){
  if(count>0){
  setCount(count-1)
}
}
function handleInc(){
  setCount(count+1)
}
  return (
    <>
    <div className='product-details'>
        <img src={location.state.image} alt='img'></img>
        <div>
        <h3>{location.state.title}</h3>
        <h3>{location.state.price}</h3>
        <h3>{location.state.rating}</h3>
        <button className="btn-details" onClick={handleDec}>-</button>
        <span className='px-2'>{count}</span>
        <button className="btn-details" onClick={handleInc}>+</button><br></br>
          <button className="btn-p">Add to Cart</button><br></br>
          <button className="btn-b my-2">Buy now</button>
        </div>
    
    </div>
    <Footer/>
    </>
  )
}

export default ProductDetails