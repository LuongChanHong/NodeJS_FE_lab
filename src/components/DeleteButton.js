import React, { useState, useEffect } from "react";

const onSubmit = (event, product, itemType) => {
  // console.log("product.id:", product.id);
  const url =
    itemType === "cart" ? "/delete-cart-item" : "/post-delete-product";
  fetch("http://localhost:5000" + url, {
    method: "POST",
    body: JSON.stringify(product),
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
  });
  // event.preventDefault();
};

const DeleteButton = (props) => {
  const [itemType, setItemType] = useState();
  useEffect(() => {
    if (props.isCartItem) {
      setItemType("cart");
    }
    if (props.isProductItem) {
      setItemType("product");
    }
  }, []);

  return (
    <div className="card__actions">
      <form
        action="/products"
        onSubmit={(event) => onSubmit(event, props.product, itemType)}
      >
        <button className="btn" type="submit">
          Delete
        </button>
      </form>
    </div>
  );
};

export default DeleteButton;
