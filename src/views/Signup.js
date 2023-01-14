import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Navigation from "../components/Navigation";

import { signUpAction } from "../redux/actions/userAction";

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [openErrMessBox, setErrMessBox] = useState(false);
  const [errMess, setErrMess] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChange = (event) => {
    let target = event.target.name;
    let value = event.target.value;
    setSignupInfo({ ...signupInfo, [target]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    //   console.log(signupInfo);
    try {
      const res = dispatch(signUpAction(signupInfo));
      res.then((data) => {
        // console.log("data:", data);
        if (typeof data === "object") {
          // console.log("data:", data);
          setErrMess(data.errors);
          setErrMessBox(true);
        } else {
          // console.log("no err");
          navigate("/login");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <Navigation isAuth={true} />
      <section className="product-form">
        <form
          onSubmit={(event) => onSubmit(event)}
          className="product-form form-control"
          action="/products"
        >
          {openErrMessBox && (
            <div className=" border-danger">
              {errMess.map((item, i) => (
                <h6 key={i} className="text-danger">
                  {item.msg}
                </h6>
              ))}
            </div>
          )}
          <div className="">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              value={signupInfo.email}
              onChange={(event) => onChange(event)}
            />
          </div>
          <div className="">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={signupInfo.name}
              onChange={(event) => onChange(event)}
            />
          </div>
          <div className="">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={signupInfo.password}
              onChange={(event) => onChange(event)}
            />
          </div>

          <div className="d-flex justify-content-end mt-3">
            <button className="button button-primary" type="submit">
              Signup
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default Signup;
