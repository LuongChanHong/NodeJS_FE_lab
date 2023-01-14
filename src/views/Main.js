import React from "react";
import "../css/forms.css";
import "../css/main.css";
import "../css/main.css";
import "../App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";

const Main = () => {
  return (
    <section className="app_bg">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />

        <Route path="*" element={<Login />} />
      </Routes>
    </section>
  );
};

export default Main;
