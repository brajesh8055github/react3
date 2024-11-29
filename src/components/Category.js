import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data = [
  {
    img: require('../images/slide1.png')
  },
  {
    img: require('../images/slide2.png')

  },
  {
    img: require('../images/slide3.png')

  },
  {
    img: require('../images/slide4.png')

  },
  {
    img: require('../images/slide5.png')

  },
  {
    img: require('../images/slide6.png')

  },
]

const categories = [
  'T-Shirts', 'Shoes', 'Hoodies', 'Shirt', 'Pants',
  'Laptop', 'Mobile', 'Cameras', 'Headphone',
  'iPad & Tablets',
];

const Category = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <>
      <div className='category' style={{ padding: " 0 20px" }} id='category'>
        <h1 className='py-4 text-center text-3xl font-bold'>All Category</h1>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="text-gray-700 hover:text-blue-500">
              <a
                href={`/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-blue-700 hover:underline"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='slide'>
        <Slider {...settings}>
          {data.map((d) => (
            <div className='card-s'>
              <img src={d.img} alt='img'></img>
              <p>{d.desc}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div style={{ padding: "0 20px" }}>
        <h2 className="text-3xl font-bold py-2">Products :</h2>
        <p>A sleek and powerful mobile phone featuring a vibrant display, high-speed performance, long-lasting battery, and advanced camera system, designed to keep you connected and productive on the go. Packed with cutting-edge features, it ensures a seamless user experience for work, play, and everything in between.</p>

        <h2 className="text-3xl font-bold py-2">About :</h2>
        <p>E-commerce refers to the buying and selling of goods and services online. It enables businesses to reach global customers through digital platforms, offering convenience, variety, and secure payment options. From retail shopping to subscription services, e-commerce transforms the way people access products, bridging businesses and consumers in a fast, efficient, and accessible manner.</p>
      </div>
    </>
  )
}

export default Category