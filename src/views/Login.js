import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Navigation from "../components/Navigation";

import { logInAction } from "../redux/actions/userAction";

const Login = () => {
  const [isLogin, setLogin] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (event) => {
    let target = event.target.name;
    let value = event.target.value;
    setLoginInfo({ ...loginInfo, [target]: value });
  };

  const handleLogin = (isLogin) => {
    setLogin(isLogin);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log("loginInfo:", loginInfo);
    try {
      dispatch(logInAction(loginInfo, () => navigate("/products")));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <Navigation isLogin={isLogin} />
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
