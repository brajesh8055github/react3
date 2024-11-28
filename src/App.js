import './App.css';
import Navbar from './components/Navbar';
import Top from './components/Top';
import ProductDetails from './components/ProductDetails';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

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
      </Routes>
    </>
  );
}

export default App;
