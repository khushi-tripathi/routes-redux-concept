import React from "react";
import { NavLink, Outlet } from "react-router";

// NavLink is just a modifed version of Link, this has properties link isActive , etc to beautify link. MAinly used to visible links on the aplication.

function NavBar() {
  // Some data which we need to pass to the children path component ...
  const data = {
    name: "Khushi Tripathi",
    designation: "Software Engineer",
    company: "Netlink",
  };
  return (
    <>
      <div className="nav">
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "white", fontWeight: "bold" } : undefined
          }
          to=""
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "white", fontWeight: "bold" } : undefined
          }
          to="about"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "white", fontWeight: "bold" } : undefined
          }
          to="contact"
        >
          Contact
        </NavLink>

        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "white", fontWeight: "bold" } : undefined
          }
          to="blogs"
        >
          Blogs
        </NavLink>

        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "white", fontWeight: "bold" } : undefined
          }
          to="todos"
        >
          TODO List
        </NavLink>
      </div>
      <Outlet context={data} />
    </>
  );
}

export default NavBar;
