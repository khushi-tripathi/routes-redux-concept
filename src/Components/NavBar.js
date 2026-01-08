import React from "react";
import { Link, Outlet } from "react-router";

function NavBar() {
  return (
    <>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
