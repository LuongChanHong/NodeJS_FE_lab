import React from "react";
import { Nav, NavItem, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <section>
      <Navbar>
        <Nav navbar>
          <NavItem>
            <NavLink className="nav-link" to="/add-user">
              <span>Add User</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/users">
              <span>User List</span>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </section>
  );
};

export default Navigation;
