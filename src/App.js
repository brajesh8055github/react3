import './App.css';
import Navbar from './components/Navbar';
import Top from './components/Top';
import ProductDetails from './components/ProductDetails';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CategoryPage from './components/CategoryPage'

const categories = [
  { name: 'T-Shirts', image: require('./images/p2.jpg') },
  { name: 'Shoes', image: require('./images/p5.png')  },
  { name: 'Hoodies', image: require('./images/p3.jpg')  },
  { name: 'Shirt', image: require('./images/p1.jpg')  },
  { name: 'Pants', image: require('./images/slide4.png')  },
  { name: 'Laptop', image: require('./images/slide4.png')  },
  { name: 'Mobile', image: require('./images/slide1.png')  },
  { name: 'Cameras', image: require('./images/slide6.png')  },
  { name: 'Headphone', image: require('./images/slide8.png')  },
  { name: 'iPad & Tablets', image: require('./images/slide7.png')  },
];

function App() {
  return (
    <>
    <div>
      <Top/>
      <Navbar/>
      </div>
      <Routes>
        <Route path='/product-details' element={<ProductDetails/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        {categories.map((category) => (
        <Route
          key={category.name}
          path={`/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
          element={<CategoryPage category={category.name} image={category.image} />}
        />
      ))}
      </Routes>
    </>
  );
}

export default App;
