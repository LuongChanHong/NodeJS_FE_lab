import React from "react";
// import { Nav, NavItem, Navbar } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="main-header">
      <nav className="main-header__nav">
        <ul className="main-header__item-list">
          <li className="main-header__item">
            <a href="/product">Product</a>
          </li>
          <li className="main-header__item">
            <a href="/add-product">Add Product</a>
          </li>
        </ul>
      </nav>
    </header>
    // <section>
    //   <Navbar>
    //     <Nav navbar>
    //       <NavItem>
    //         <NavLink className="nav-link" to="/add-user">
    //           <span>Add User</span>
    //         </NavLink>
    //       </NavItem>
    //       <NavItem>
    //         <NavLink className="nav-link" to="/users">
    //           <span>User List</span>
    //         </NavLink>
    //       </NavItem>
    //     </Nav>
    //   </Navbar>
    // </section>
  );
};

export default Navigation;
