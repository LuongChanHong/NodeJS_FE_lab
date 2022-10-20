import React, { useState, useEffect } from "react";

import Navigation from "../components/Navigation";
import AddToCart from "../components/AddToCart";

import "../css/main.css";
import "../css/product.css";

const renderProductItem = (product) => (
  <article key={product._id} className="card product-item">
    <header className="card__header">
      <h1 className="product__title">{product.title}</h1>
    </header>
    <div className="card__image">
      <img src={product.imageUrl} alt="A Book" />
    </div>
    <div className="card__content">
      <h2 className="product__price">{product.price} $</h2>
      <p className="product__description">{product.description}</p>
    </div>
    <AddToCart product={product} />
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

const Shop = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const getProductList = async () => {
      try {
        fetch("http://localhost:5000/get-products")
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

export default Shop;
