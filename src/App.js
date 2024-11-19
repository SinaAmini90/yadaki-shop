import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import Products from "./pages/Products.js";
import Cart from "./pages/Cart.js";
import Footer from "./components/Footer.js";
import News from "./pages/News.js";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
