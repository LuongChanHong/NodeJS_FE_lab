import React, { useState, useEffect } from "react";
import axios from "axios";

import Navigation from "../components/Navigation";

import { get } from "../utils/fetch";
import { serverPath } from "../utils/path";

import "../css/main.css";
import "../css/product.css";

const Order = () => {
  const [orderList, setOrderList] = useState([]);
  const [errMess, setErrMess] = useState("");
  const [PDF, setPDF] = useState();
  useEffect(() => {
    const getOrderList = async () => {
      try {
        const response = get("/get-order");
        // console.log("response:", response);
        if (response) {
          response
            .then((res) => {
              // console.log("res:", res);
              setOrderList(res.data);
            })
            .catch((error) => {
              console.log("error.response:", error.response);
              setErrMess(error.response.data);
            });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getOrderList();
  }, []);

  const downloadInvoice = (event, id) => {
    event.preventDefault();
    // console.log("id:", id);
    axios
      .get(
        serverPath + `/get-invoice/?id=${id}`,
        { responseType: "arraybuffer" }
        // {
        //   headers: {
        //     "Content-Type": "application/pdf",
        //     "Content-Disposition": "inline",
        //   },
        // }
      )
      .then((res) => {
        const url = window.URL.createObjectURL(
          new Blob([res.data], { type: "application/pdf" })
        );
        var link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "invoice.pdf");
        document.body.appendChild(link);
        link.click();
      });
  };

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
      <button
        onClick={(e) => downloadInvoice(e, order._id)}
        className="btn btn-success"
      >
        Invoice Detail
      </button>
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
      return <h1>{errMess}</h1>;
    }
  };

  return (
    <section>
      <Navigation />
      {renderOrderList(orderList)}
    </section>
  );
};

export default Order;
