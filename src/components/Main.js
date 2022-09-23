import React from "react";
import "../App.css";
import { Routes, Route } from "react-router-dom";

import AddUser from "./AddUser";
import Users from "./Users";

const Main = () => {
  return (
    <section className="app_bg">
      <Routes>
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/add-user" element={<AddUser />} />
        <Route path="*" element={<AddUser />} />
      </Routes>
    </section>
  );
};

export default Main;
