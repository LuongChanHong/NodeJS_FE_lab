import React from "react";
import { redirect } from "react-router-dom";

const onSubmit = (event, product) => {
  event.preventDefault();
  console.log("product:", product);
  window.location.href = `/edit/${product.id}`;
  //   fetch("http://localhost:5000/delete-cart-item", {
  //     method: "POST",
  //     body: parseInt(product.id),
  //     headers: { "Content-Type": "application/json" },
  //     credentials: "same-origin",
  //   }) // Trả về response sau khi xử lí ở server để tránh lỗi fetch ở UI
  //     .then((response) => console.log("response:", response))
  //     .catch((error) => console.log("error:", error));
};

const EditButton = (props) => {
  return (
    <div className="card__actions">
      <form onSubmit={(event) => onSubmit(event, props.product)}>
        <button className="btn" type="submit">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditButton;
