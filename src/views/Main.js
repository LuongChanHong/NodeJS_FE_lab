import React from "react";
import "../css/forms.css";
import "../css/main.css";
import "../App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import Feed from "./Feed";
import PostDetail from "./PostDetail";

const Main = () => {
  return (
    <section className="app_bg">
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/feed" element={<Feed />} />
        <Route exact path="/post-detail/:id" element={<PostDetail />} />

        <Route path="*" element={<Login />} />
      </Routes>
    </section>
  );
};

export default Main;
