import React, { useState, useEffect } from "react";

import Navigation from "../components/Navigation";

import "../css/main.css";
import "../css/product.css";
const renderOrderItem = (order) => (
  <article
    key={order._id}
    className="d-flex flex-column shadow-lg p-3 m-2 bg-white rounded"
    style={{ width: "30rem" }}
  >
    {order.products.map((product) => (
      <div key={product.product._id} className="d-flex">
        <div className="d-flex justify-content-" style={{ width: "20rem" }}>
          <h3>{product.product.title}</h3>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ width: "10rem" }}
        >
          <h3 className="mx-1">({product.quantity})</h3>
          <h3 className="ms-4">{product.product.price} $</h3>
        </div>
      </div>
    ))}
  </article>
);

const renderOrderList = (orderList) => {
  const countOrder = orderList.length;
  if (countOrder > 0) {
    return (
      <section className="d-flex flex-column align-items-center">
        {orderList.map((order) => renderOrderItem(order))}
      </section>
    );
  } else {
    return <h1>have no Order</h1>;
  }
};

const Order = () => {
  const [orderList, setOrderList] = useState([]);
  useEffect(() => {
    const getOrderList = async () => {
      try {
        fetch("http://localhost:5000/get-order")
          .then((response) => response.json())
          .then((data) => {
            setOrderList(data);
            // console.log(data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getOrderList();
  }, []);

  return (
    <section>
      <Navigation />
      {renderOrderList(orderList)}
    </section>
  );
};

export default Order;
