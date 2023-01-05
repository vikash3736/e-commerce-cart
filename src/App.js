import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Cards from './components/Cards.js';
import CardDetails from './components/CardDetails';
import AddToCart from './components/AddToCart';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Cards />} />
      <Route path='/cart' element={<CardDetails />} />
      <Route path='/addtocart' element={<AddToCart />} />
    </Routes>
    </>
  );
}

export default App;
