import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	  return (
		      <>
		        <Header />
		        <Routes>
		          <Route path="/" element={<HomePage />} />
		          <Route path="/product/:id" element={<ProductPage />} />
		          <Route path="/cart" element={<CartPage />} />
		          <Route path="/checkout" element={<CheckoutPage />} />
		          <Route path="/login" element={<LoginPage />} />
		          <Route path="/register" element={<RegisterPage />} />
		        </Routes>
		        <Footer />
		      </>
		    );
}

export default App;
