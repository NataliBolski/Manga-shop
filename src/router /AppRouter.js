import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Home from '../components /Home';
import ProductList from '../components /ProductList';
import Contacts from '../components /Contacts';
import Cart from '../components /Cart';


const AppRouter = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
  };

  return (
    <Router>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/manga">Манга</Link>
        <Link to="/contacts">Контакты</Link>
        <button onClick={toggleCart}>
         Корзина ({cart.length})
        </button>
      </nav>

      {/* Стилизуем корзину, она будет скрыта и появляться с анимацией */}
      {isCartOpen && <Cart cart={cart} removeFromCart={removeFromCart} closeCart={toggleCart} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manga" element={<ProductList addToCart={addToCart} />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
