import React, { useState, useEffect } from "react";

import Navigation from "../components/Navigation";
import DeleteButton from "../components/DeleteButton";
import AddOrder from "../components/AddOrder";

import "../css/main.css";
import "../css/product.css";

const renderCartItem = (product) => (
  <article key={product.product._id} className="card product-item">
    <header className="card__header">
      <h1 className="product__title">
        {product.product.title} ({product.quantity})
      </h1>
    </header>
    <div className="card__image">
      <img src={product.product.imageUrl} alt="A Book" />
    </div>
    <div className="card__content">
      <h2 className="product__price">{product.product.price} $</h2>
      <p className="product__description">{product.product.description}</p>
    </div>
    <DeleteButton isCartItem={true} product={product} />
  </article>
);

const renderCartList = (productList) => {
  const countProduct = productList.length;
  if (countProduct > 0) {
    return (
      <section className="grid">
        {productList.map((product) => renderCartItem(product))}
      </section>
    );
  } else {
    return <h1>have no Product</h1>;
  }
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const getcartItems = async () => {
      try {
        fetch("http://localhost:5000/get-cart")
          .then((response) => response.json())
          .then((data) => {
            setCartItems(data);
            // console.log("data:", data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getcartItems();
  }, []);

  return (
    <section>
      <Navigation />
      {renderCartList(cartItems)}
      {cartItems.length > 0 ? <AddOrder /> : <></>}
    </section>
  );
};

export default Cart;
