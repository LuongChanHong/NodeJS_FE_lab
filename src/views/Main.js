import React from "react";
import "../css/forms.css";
import "../css/main.css";
import "../css/main.css";
import "../App.css";
import { Routes, Route } from "react-router-dom";

import AddProduct from "./AddProduct";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import AdminProducts from "./AdminProducts";
import EditProduct from "./EditProduct";
import Shop from "./Shop";
import Cart from "./Cart";

const Main = () => {
  return (
    <section className="app_bg">
      <Routes>
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/admin-products" element={<AdminProducts />} />
        <Route exact path="/products/:productID" element={<ProductDetail />} />
        <Route exact path="/edit/:productID" element={<EditProduct />} />
        <Route exact path="/add-product" element={<AddProduct />} />
        <Route path="*" element={<Shop />} />
      </Routes>
    </section>
  );
};

export default Main;