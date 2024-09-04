import React from 'react';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Menu from './pages/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Review from './pages/Review';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import Cart from './pages/Cart';
import AdminDashboard from './Admin/AdminDashboard';

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
        <Route path='/profile' element={<Profile/>}/> 
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
