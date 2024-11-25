import React from 'react'

const productsData = [
    {
        image: require('../images/p1.jpg'),
        title: "Formal Blue Shirt",
        price: "$45.99",
        rating: "⭐⭐⭐⭐⭐", 
    },
    {
        image: require('../images/p2.jpg'),
        title: "Formal Blue Shirt",
        price: "$45.99",
        rating: "⭐⭐⭐⭐⭐", 
    },
    {
        image: require('../images/p3.jpg'),
        title: "Formal Blue Shirt",
        price: "$45.99",
        rating: "⭐⭐⭐⭐⭐", 
    },
    {
        image: require('../images/p4.jpg'),
        title: "Formal Blue Shirt",
        price: "$45.99",
        rating: "⭐⭐⭐⭐⭐", 
    },
    {
        image: require('../images/p5.png'),
        title: "Formal Blue Shirt",
        price: "$45.99",
        rating: "⭐⭐⭐⭐⭐", 
    },
    {
        image: require('../images/p6.png'),
        title: "Formal Blue Shirt",
        price: "$45.99",
        rating: "⭐⭐⭐⭐⭐", 
    },
    {
        image: require('../images/p7.png'),
        title: "Formal Blue Shirt",
        price: "$45.99",
        rating: "⭐⭐⭐⭐⭐", 
    },
    {
        image: require('../images/p8.png'),
        title: "Formal Blue Shirt",
        price: "$45.99",
        rating: "⭐⭐⭐⭐⭐", 
    },

]

const Products = () => {
  return (
    <div className='product' style={{padding:"0 20px"}}>
        {productsData.map((product,index)=>(
            <div key={index} className='product-card'>
                <img src={product.image} alt='img'></img>
                <div>
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                    <p>{product.rating}</p>
                    <button className='btn-p'>Add to Cart</button>
                    </div>
                </div>
        )
        )}
    </div>
  )
}

export default Products