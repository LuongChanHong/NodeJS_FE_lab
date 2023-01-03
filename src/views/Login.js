import React, { useState, useEffect } from "react";

import Navigation from "../components/Navigation";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  //   useEffect(() => {
  //     if (isEditPage != negative) {
  //       const getEditProduct = () => {
  //         try {
  //           fetch(`http://localhost:5000/get-product?id=${id}`)
  //             .then((response) => response.json())
  //             .then((data) => {
  //               setProduct(data);
  //               // console.log("data:", data);
  //             });
  //         } catch (err) {
  //           console.log("err:", err);
  //         }
  //       };
  //       getEditProduct();
  //     }
  //   }, []);

  const onChange = (event) => {
    let target = event.target.name;
    let value = event.target.value;
    setLoginInfo({ ...loginInfo, [target]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log("loginInfo:", loginInfo);
    fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify(loginInfo),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log("data:", data))
      .catch((err) => console.log(err));
  };

  return (
    <section>
      <Navigation isAuth={true} />
      <form
        onSubmit={(event) => onSubmit(event)}
        className="product-form"
        action="/products"
      >
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={loginInfo.email}
            onChange={(event) => onChange(event)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="passwrod"
            name="password"
            value={loginInfo.password}
            onChange={(event) => onChange(event)}
          />
        </div>

        <div>
          <button className="btn btn-success" type="submit">
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
