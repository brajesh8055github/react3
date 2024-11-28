import React from 'react'
import Hero from './Hero'
import Overview from './Overview'
import Products from './Products'
import Category from './Category'
import Contact from './Contact'
import Banner from './Banner'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
      <Overview/>
      <Products/>
      <Category/>
      <Contact/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Home