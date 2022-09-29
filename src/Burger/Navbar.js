import React from "react";
import { Link } from "react-router-dom";
import { NavbarWrapper } from "./styles/NavbarStyles";

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <Link  to="/Welcome" href="#">Welcome</Link>
      <Link to="/Home" href="#">Home</Link>
      <Link to="/OpenCard" href="#">Open Card</Link>
      <Link  to="/Voluntaried"  href="#">Voluntaried</Link>
      <Link  to="/Donate"  href="#">Donate</Link>
    </NavbarWrapper>
  );
}

export default Navbar;
