import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navigation from "../components/Navigation";

import "../css/main.css";
import "../css/product.css";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [productID, setProductID] = useSearchParams();
  const id = productID.get("_id");

  useEffect(() => {
    const getProduct = async () => {
      try {
        fetch(`http://localhost:5000/get-product?id=${id}`)
          .then((response) => response.json())
          .then((product) => {
            setProduct(product);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  return (
    <section>
      <Navigation />
      <section className="grid">
        <article className="card product-item">
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
        </article>
      </section>
    </section>
  );
};

export default ProductDetail;
