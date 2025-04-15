// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Product from "./pages/product/product";
import Pricing from "./pages/pricing/pricing";
import Contact from "./pages/contact/contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import NotFound from "./components/Notfound";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/user/:id" element={<User />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  </React.StrictMode>
);
