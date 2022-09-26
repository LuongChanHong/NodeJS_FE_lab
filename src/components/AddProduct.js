import React, { useState } from "react";
import Navigation from "./Navigation";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
  });

  const onChange = (event) => {
    let target = event.target.name;
    let value = event.target.value;
    setProduct({ ...product, [target]: value });
  };

  const onSubmit = (event) => {
    // event.preventDefault();
    console.log("product:", product);
    fetch("http://localhost:5000/add-product", {
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
        action="/product"
      >
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            onChange={(event) => onChange(event)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            onChange={(event) => onChange(event)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">description</label>
          <input
            type="text"
            name="description"
            onChange={(event) => onChange(event)}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Add Product
        </button>
      </form>
    </section>
  );
};

export default AddProduct;
