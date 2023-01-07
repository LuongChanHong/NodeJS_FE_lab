import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from "../components/Navigation";

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    password: "",
    confirm: "",
  });
  const [openErrMessBox, setErrMessBox] = useState(false);
  const [errMess, setErrMess] = useState([]);

  const navigate = useNavigate();

  const onChange = (event) => {
    let target = event.target.name;
    let value = event.target.value;
    setSignupInfo({ ...signupInfo, [target]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    //   console.log(signupInfo);
    fetch("http://localhost:5000/signup", {
      method: "POST",
      body: JSON.stringify(signupInfo),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setErrMess(data.errors);
        setErrMessBox(true);
      });
    // navigate("/login");
  };

  return (
    <section>
      <Navigation isAuth={true} />
      <form
        onSubmit={(event) => onSubmit(event)}
        className="product-form"
        action="/products"
      >
        {openErrMessBox && (
          <div className="form-control border-danger">
            {errMess.map((item, i) => (
              <h6 key={i} className="text-danger">
                {item.msg}
              </h6>
            ))}
          </div>
        )}
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={signupInfo.email}
            onChange={(event) => onChange(event)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={signupInfo.password}
            onChange={(event) => onChange(event)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            value={signupInfo.confirm}
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

export default Signup;
