import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logOutAction } from "../redux/actions/userAction";

const Navigation = (props) => {
  const [isLogin, setLogin] = useState(false);
  const anyUserLogin = useSelector((state) => state.user.isLogin);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setLogin(anyUserLogin);
  }, [anyUserLogin]);

  const onLogout = (event) => {
    event.preventDefault();
    // console.log("loginInfo:", loginInfo);
    try {
      dispatch(logOutAction(() => navigate("/products")));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="main-header">
      <nav className="main-header__nav">
        <ul className="main-header__item-list">{isLogin && <></>}</ul>
        <ul className="main-header__item-list">
          <li className="main-header__item">
            <a href="/signup">Signup</a>
          </li>
          {/* {!isLogin && (
            <li className="main-header__item">
              <a href="/login">Login</a>
            </li>
          )} */}
          {isLogin && (
            <>
              <li className="main-header__item">
                <a href="/feed">Feed</a>
              </li>
              <li className="main-header__item">
                <button
                  onClick={onLogout}
                  className="button button-dark"
                  type="button"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
