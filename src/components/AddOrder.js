import React from "react";

const onSubmit = (event) => {
  // event.preventDefault();
  // console.log("product:", product);
  fetch("http://localhost:5000/create-order") // Trả về response sau khi xử lí ở server để tránh lỗi fetch ở UI
    .then((response) => {
      console.log("response:", response);
    })
    .catch((error) => console.log("error:", error));
};

const AddOrder = (props) => {
  return (
    <div className="card__actions">
      <form action="/order" onSubmit={(event) => onSubmit(event)}>
        <button className="btn" type="submit">
          Order now
        </button>
      </form>
    </div>
  );
};

export default AddOrder;
