import React from "react";
import { redirect } from "react-router-dom";

const onSubmit = (event, product) => {
  event.preventDefault();
  console.log("product:", product);
  window.location.href = `/edit/${product.id}`;
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
