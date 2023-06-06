import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <Link className="navbarMenu" to="/">
          Home
        </Link>
        <Link className="navbarMenu" to="/board">
          Board
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default NavBar;
