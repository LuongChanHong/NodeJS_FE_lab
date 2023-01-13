import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Navigation from "../components/Navigation";

import { formDataPost } from "../utils/fetch";

const AddProduct = () => {
  const [productID, setProductID] = useSearchParams();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });
  const [errMess, setErrMess] = useState([]);
  const isEditPage = window.location.href.search("edit");
  const negative = -1;
  const id = productID.get("_id");

  const navigate = useNavigate();

  useEffect(() => {
    if (isEditPage != negative) {
      const getEditProduct = () => {
        try {
          fetch(`http://localhost:5000/get-product?id=${id}`)
            .then((response) => response.json())
            .then((data) => {
              setProduct(data);
              // console.log("data:", data);
            });
        } catch (err) {
          console.log("err:", err);
        }
      };
      getEditProduct();
    }
  }, []);

  const onChange = (event) => {
    let value = event.target.files ? event.target.files[0] : event.target.value;
    let target = event.target.name;
    setProduct({ ...product, [target]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log("product:", product);
    const formData = new FormData();
    for (let attr in product) {
      formData.append(`${attr}`, product[`${attr}`]);
    }

    const url = isEditPage != negative ? "/post-edit-product" : "/add-product";
    try {
      const response = formDataPost(url, formData);
      // console.log("response:", response);
      response.then((res) => {
        // console.log("res:", res);
        if (res.data.length > 0) {
          setErrMess(res.data);
        } else {
          navigate("/products");
        }
      });
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <section>
      <Navigation />
      <form
        onSubmit={(event) => onSubmit(event)}
        className="product-form "
        // encType="multipart/form-data"
        action="/products"
      >
        {errMess.length > 0 && (
          <div className="border border-danger rounded p-2 mt-3">
            {errMess.map((item, i) => (
              <h6 key={i} className="text-danger">
                {item.msg}
              </h6>
            ))}
          </div>
        )}
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={(event) => onChange(event)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={(event) => onChange(event)}
          />
        </div>
        <div className="">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            name="image"
            // value={product.image}
            onChange={(event) => onChange(event)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="description">description</label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={(event) => onChange(event)}
          />
        </div>
        <div>
          {isEditPage != negative ? (
            <button className="btn btn-success" type="submit">
              Edit Product
            </button>
          ) : (
            <button className="btn btn-success" type="submit">
              Add Product
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
