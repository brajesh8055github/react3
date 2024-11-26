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
        title: "Dark Black T-Shirt",
        price: "$200.50",
        rating: "⭐⭐⭐⭐⭐", 
    },
    {
        image: require('../images/p3.jpg'),
        title: "Hoodie For Men",
        price: "$500.60",
        rating: "⭐⭐⭐⭐⭐", 
    },
    {
        image: require('../images/p4.jpg'),
        title: "Party Suit For Men",
        price: "$300.70",
        rating: "⭐⭐⭐⭐⭐", 
    },
    {
        image: require('../images/p5.png'),
        title: "Sport Shoes",
        price: "$500.10",
        rating: "⭐⭐⭐⭐⭐", 
    },
    {
        image: require('../images/p6.png'),
        title: "Girls Hand Bag",
        price: "$60.55",
        rating: "⭐⭐⭐⭐⭐", 
    },
    {
        image: require('../images/p7.png'),
        title: "Sport Shoes",
        price: "$100.99",
        rating: "⭐⭐⭐⭐⭐", 
    },
    {
        image: require('../images/p8.png'),
        title: "Girls Heel-Shoes",
        price: "$99.99",
        rating: "⭐⭐⭐⭐⭐", 
    },

]

const Products = () => {
  return (
    <>
    <h1 className="text-3xl font-bold text-center py-4"  id='product'>PRODUCTS</h1>
    <div className='product' style={{padding:"0 20px"}}>
        {productsData.map((product,index)=>(
            <div key={index} className='product-card'>
                <img src={product.image} alt='img'></img>
                <div style={{padding:"5px"}}>
                    <h3>{product.title}</h3>
                    <p>{product.price}</p>
                    <p>{product.rating}</p>
                    <button className='btn-p'>Add to Cart</button>
                    </div>
                </div>
        )
        )}
    </div>
    </>
  )
}

export default Products