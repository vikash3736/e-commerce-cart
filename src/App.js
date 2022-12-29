import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Cards from './components/Cards.js';
import CardDetails from './components/CardDetails';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Cards />} />
      <Route path='/cart' element={<CardDetails />} />
    </Routes>
    </>
  );
}

export default App;
