import React from 'react';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Footer from './pages/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
