import React from "react";
import "./App.css";
import Home from "./components/home.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import Products from "./components/products.js";
import Cart from "./components/cart.js";
import Contact from "./components/contact.js";
import Login from "./components/login.js";
import SignUp from "./components/signup.js";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./components/CartContext.js"; // Import the CartProvider
import { AuthProvider } from "./components/AuthContext.js";

function App() {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-white h-screen">
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            {" "}
            {/* Wrap the entire app with CartProvider */}
            <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login/signup" element={<SignUp />} />
            </Routes>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
