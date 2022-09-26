import React from "react";
import "../css/forms.css";
import "../css/main.css";
import "../css/main.css";
import "../App.css";
import { Routes, Route } from "react-router-dom";

import AddProduct from "./AddProduct";
import Product from "./Product";

const Main = () => {
  return (
    <section className="app_bg">
      <Routes>
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/add-product" element={<AddProduct />} />
        <Route path="*" element={<Product />} />
      </Routes>
    </section>
  );
};

export default Main;
