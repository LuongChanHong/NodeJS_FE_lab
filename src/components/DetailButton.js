import React from "react";

const onSubmit = (event, product) => {
  event.preventDefault();
  // console.log("product:", product);
  window.location.href = `/products/detail?_id=${product._id}`;
};

const DetailButton = (props) => {
  return (
    <div className="card__actions">
      <form onSubmit={(event) => onSubmit(event, props.product)}>
        <button className="btn" type="submit">
          Detail
        </button>
      </form>
    </div>
  );
};

export default DetailButton;
