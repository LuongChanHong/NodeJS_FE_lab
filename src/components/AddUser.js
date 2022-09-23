import React from "react";
import "../App.css";
import Navigation from "./Navigation";

const AddUser = () => {
  const getUserList = (event) => {
    event.preventDefault();

    const target = event.target.elements;
    const user = { username: target.username.value };
    console.log("user:", user);
    fetch("http://localhost:5000/add-user", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => console.log("data:", data));
  };
  return (
    <section>
      <Navigation />
      <form
        onSubmit={(event) => getUserList(event)}
        // action="/users"
        // method="POST"
        className="d-flex justify-content-center pt-5"
      >
        <input type="text" name="usename" id="username" />
        <button type="submit" className="mx-2">
          add user
        </button>
      </form>
    </section>
  );
};

export default AddUser;
