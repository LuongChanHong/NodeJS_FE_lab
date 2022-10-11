import React, { useState, useEffect } from "react";

import Navigation from "../components/Navigation";
import DeleteButton from "../components/DeleteButton";

import "../css/main.css";
import "../css/product.css";

const renderProductItem = (product) => (
  <article key={product.id} className="card product-item">
    <header className="card__header">
      <h1 className="product__title">
        {product.title} ({product.quantity})
      </h1>
    </header>
    <div className="card__image">
      <img
        src="https://cdn.pixabay.com/photo/2016/03/31/20/51/book-1296045_960_720.png"
        alt="A Book"
      />
    </div>
    <div className="card__content">
      <h2 className="product__price">{product.price}</h2>
      <p className="product__description">{product.description}</p>
    </div>
    <DeleteButton product={product} />
  </article>
);

const renderProductList = (productList) => {
  const countProduct = productList.length;
  if (countProduct > 0) {
    return (
      <section className="grid">
        {productList.map((product) => renderProductItem(product))}
      </section>
    );
  } else {
    return <h1>have no Product</h1>;
  }
};

const Cart = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const getProductList = async () => {
      try {
        fetch("http://localhost:5000/get-cart")
          .then((response) => response.json())
          .then((data) => {
            setProductList(data);
            // console.log("ProductList:", ProductList);
            // console.log(data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getProductList();
  }, []);

  return (
    <section>
      <Navigation />
      {renderProductList(productList)}
    </section>
  );
};

export default Cart;