import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";

const AddProduct = () => {
  const isEditPage = window.location.href.search("edit");
  const negative = -1;
  const productID = window.location.href[window.location.href.length - 1];
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    imageUrl: "",
  });
  useEffect(() => {
    if (isEditPage != negative) {
      const getEditProduct = async () => {
        try {
          await fetch(`http://localhost:5000/get-edit-product?id=${productID}`)
            .then((response) => response.json())
            .then((data) => {
              setProduct(data);
            });
        } catch (err) {
          console.log("err:", err);
        }
      };
      getEditProduct();
    }
  }, []);

  const onChange = (event) => {
    let target = event.target.name;
    let value = event.target.value;
    setProduct({ ...product, [target]: value });
  };

  const onSubmit = (event) => {
    // event.preventDefault();
    console.log("product:", product);
    const url = isEditPage != negative ? "/post-edit-product" : "/add-product";
    fetch("http://localhost:5000" + url, {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => console.log("data:", data));
  };

  return (
    <section>
      <Navigation />
      <form
        onSubmit={(event) => onSubmit(event)}
        className="product-form"
        action="/products"
      >
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={(event) => onChange(event)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={(event) => onChange(event)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="imageUrl">ImageUrl</label>
          <input
            type="text"
            name="imageUrl"
            value={product.imageUrl}
            onChange={(event) => onChange(event)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">description</label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={(event) => onChange(event)}
          />
        </div>
        <div>
          {isEditPage != negative ? (
            <button className="btn btn-success" type="submit">
              Edit Product
            </button>
          ) : (
            <button className="btn btn-success" type="submit">
              Add Product
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
