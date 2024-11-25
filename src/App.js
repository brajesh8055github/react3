import './App.css';
import Products from './components/Products';
import Category from './components/Category';
import Contact from './components/Contact';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Top from './components/Top';
import Overview from './components/Overview';

function App() {
  return (
    <div>
      <Top/>
      <Navbar/>
      <Hero/>
      <Overview/>
      <Products/>
      <Category/>
      <Contact/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
