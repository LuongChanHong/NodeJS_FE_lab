import React from "react";

const onSubmit = (event, product) => {
  // event.preventDefault();
  // console.log("product:", product);
  fetch("http://localhost:5000/add-to-cart", {
    method: "POST",
    body: JSON.stringify(product),
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
  }) // Trả về response sau khi xử lí ở server để tránh lỗi fetch ở UI
    .then((response) => {
      // console.log("response:", response);
    })
    .catch((error) => console.log("error:", error));
};

const AddToCart = (props) => {
  return (
    <div className="card__actions">
      <form action="/cart" onSubmit={(event) => onSubmit(event, props.product)}>
        <button className="btn" type="submit">
          Add to Cart
        </button>
      </form>
    </div>
  );
};

export default AddToCart;
