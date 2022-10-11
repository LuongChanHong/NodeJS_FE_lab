import React from "react";

const onSubmit = (event, product) => {
  event.preventDefault();
  // console.log("product:", product);
  fetch("http://localhost:5000/delete-cart-item", {
    method: "POST",
    body: parseInt(product.id),
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
  }) // Trả về response sau khi xử lí ở server để tránh lỗi fetch ở UI
    .then((response) => console.log("response:", response))
    .catch((error) => console.log("error:", error));
};

const DeleteButton = (props) => {
  return (
    <div className="card__actions">
      <form onSubmit={(event) => onSubmit(event, props.product)}>
        <button className="btn" type="submit">
          Delete
        </button>
      </form>
    </div>
  );
};

export default DeleteButton;
