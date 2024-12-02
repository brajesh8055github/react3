import './App.css';
import Navbar from './components/Navbar';
import Top from './components/Top';
import ProductDetails from './components/ProductDetails';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CategoryPage from './components/CategoryPage'
import Login from './Pages/Login';
import Register from './Pages/Register';

const categories = [
  {
    name: 'T-Shirts',
    images: [require('./images/p2.jpg'), require('./images/p2.jpg'), require('./images/p2.jpg')],
    title: "Dark Black T-Shirt",
    price: "$45.99",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: 'Shoes',
    images: [require('./images/p5.png'), require('./images/p5.png'), require('./images/p5.png')],
    title: "Sport Shoes",

    price: "$200.50",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: 'Hoodies',
    images: [require('./images/p3.jpg'), require('./images/p3.jpg'), require('./images/p3.jpg')],
    title: "Hoodie For Men",
    price: "$500.60",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: 'Shirt',
    images: [require('./images/p1.jpg'), require('./images/p1.jpg'), require('./images/p1.jpg')],
    title: "Party Suit For Men",
    price: "$300.70",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: 'Pants',
    images: [require('./images/slide4.png'), require('./images/slide4.png'), require('./images/slide4.png')],
    title: "Formal Pants",
    price: "$500.10",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: 'Laptop',
    images: [require('./images/slide4.png'), require('./images/slide4.png'), require('./images/slide4.png')],
    title: "Infinix Y3 Max",
    price: "$60.55",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: 'Mobile',
    images: [require('./images/slide1.png'), require('./images/slide1.png'), require('./images/slide1.png')],
    title: "Nokia 105",
    price: "$100.99",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: 'Cameras',
    images: [require('./images/slide6.png'), require('./images/slide6.png'), require('./images/slide6.png')],
    title: "Good Quality Camera",
    price: "$99.99",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: 'Headphone',
    images: [require('./images/slide8.png'), require('./images/slide8.png'), require('./images/slide8.png')],
    title: "High Quality Headphone",
    price: "$89.99",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    name: 'iPad & Tablets',
    images: [require('./images/slide7.png'), require('./images/slide7.png'), require('./images/slide7.png')],
    title: "Smooth Design",
    price: "$109.79",
    rating: "⭐⭐⭐⭐⭐",
  },
];



function App() {
  return (
    <>
      <div>
        <Top />
        <Navbar />
      </div>
      <Routes>
        <Route path='/product-details' element={<ProductDetails />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/' element={<Home />}></Route>
        {categories.map((category) => (
          <Route
            key={category.name}
            path={`/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
            element={
              <CategoryPage
                name={category.name}
                rating={category.rating}
                title={category.title}
                price={category.price}
                images={category.images}
              />
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
