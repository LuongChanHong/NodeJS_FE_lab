import React from "react";

const onSubmit = (event, product) => {
  // console.log("product.id:", product.id);
  fetch("http://localhost:5000/post-delete-product", {
    method: "POST",
    body: JSON.stringify({ id: product.id }),
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
  });
  // event.preventDefault();
};

const DeleteButton = (props) => {
  return (
    <div className="card__actions">
      <form
        action="/products"
        onSubmit={(event) => onSubmit(event, props.product)}
      >
        <button className="btn" type="submit">
          Delete
        </button>
      </form>
    </div>
  );
};

export default DeleteButton;
