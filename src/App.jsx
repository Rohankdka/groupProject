import React from 'react';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Menu from './pages/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Review from './pages/Review';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/review' element={<Review/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
