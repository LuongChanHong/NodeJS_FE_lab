import React from "react";
// import { Nav, NavItem, Navbar } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

const Navigation = (props) => {
  return (
    <header className="main-header">
      <nav className="main-header__nav">
        <ul className="main-header__item-list">
          <li className="main-header__item">
            <a href="/shop">Shop</a>
          </li>
          <li className="main-header__item">
            <a href="/products">Products</a>
          </li>
          <li className="main-header__item">
            <a href="/cart">Cart</a>
          </li>
          <li className="main-header__item">
            <a href="/order">Orders</a>
          </li>
          {props.isAuth ? (
            <>
              <li className="main-header__item">
                <a href="/add-product">Add Product</a>
              </li>
              <li className="main-header__item">
                <a href="/admin-products">Admin Product</a>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
        <ul className="main-header__item-list">
          <li className="main-header__item">
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
