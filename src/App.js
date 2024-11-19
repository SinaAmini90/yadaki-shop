import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Footer from "./components/Footer.jsx";
import News from "./pages/News.jsx";

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
