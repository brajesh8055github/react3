import React from 'react'
// import { useTypewriter } from 'react-simple-typewriter'
const Overview = () => {
  // const {text} = useTypewriter({
  //   words: ['Shoes','Hoodie','Pants'],
  //   loop:{}
  // })
  return (
    <div className='overview' style={{ padding: "20px" }}>
      <h2 className="text-2xl font-bold text-black">UPTO 50% OFF</h2>
      <h2 className="text-2xl font-bold text-black">Best Deal</h2>
      <h2 className="text-2xl font-bold text-black">Product
      </h2>
      <button className='btn-over'>SHOP NOW</button>
    </div>
  )
}

export default Overview