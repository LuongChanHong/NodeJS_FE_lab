import React from "react";

const onSubmit = (event, product) => {
  event.preventDefault();
  // console.log("product:", product);
  fetch("http://localhost:5000/add-to-cart", {
    method: "POST",
    body: JSON.stringify(product),
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
  });
};

const AddToCart = (props) => {
  return (
    <div className="card__actions">
      <form onSubmit={(event) => onSubmit(event, props.product)}>
        <button className="btn" type="submit">
          Add to Cart
        </button>
      </form>
    </div>
  );
};

export default AddToCart;
