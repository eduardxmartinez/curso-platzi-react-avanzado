import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Nav, Link } from "./styles";
import { AiOutlineHome, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";

const SIZE = "32px";

export const NavBar = () => {
  return (
    <Nav>
      <Link end to="/">
        <AiOutlineHome size={SIZE} />
      </Link>
      <Link end to="/favorites">
        <AiOutlineHeart size={SIZE} />
      </Link>
      <Link end to="/user">
        <AiOutlineUser size={SIZE} />
      </Link>
    </Nav>
  );
};
