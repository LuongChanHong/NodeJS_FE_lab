import React, { useState, useEffect } from "react";

import Navigation from "./Navigation";

const Users = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const getUserList = async () => {
      try {
        fetch("http://localhost:5000/get-user")
          .then((response) => response.json())
          .then((data) => {
            setUserList(data);
            // console.log("userList:", userList);
            // console.log(data);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getUserList();
  }, []);

  // console.log("userList out:", userList);

  const renderUserList = () => {
    const countUser = userList.length;
    if (countUser > 0) {
      return (
        <section>
          <ul>
            {userList.map((user) => (
              <li>{user.username}</li>
            ))}
          </ul>
        </section>
      );
    } else {
      return <h1>have no user</h1>;
    }
  };

  return (
    <section>
      <Navigation />
      <h1>User List:</h1>
      {renderUserList()}
    </section>
  );
};

export default Users;
