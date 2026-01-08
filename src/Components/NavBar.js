import React from "react";
import { Link, Outlet } from "react-router";

function NavBar() {
  return (
    <>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/dummy/about">About</Link>
        <Link to="/dummy/contact">Contact</Link>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
