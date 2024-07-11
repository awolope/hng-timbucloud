import React from "react";
import "./navbar.css";

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBar from "./Serach";

export default function Navbar() {
  return (
    <div className="navdi sm">
      <div className="logoiv sm">
        <p className="logo sm"> TimberClouds</p>
        <p className="minilogo sm">TM</p>
      </div>
      <div className="mavbar sm">
        <Link to="/" className="mavbar-link">
          Home
        </Link>
        <Link to="/Shop" className="mavbar-link">
          Shop
        </Link>
      </div>
      <div className="search sm">
        <SearchBar />
        <FaShoppingCart
          style={{ fontSize: "24px", color: "red" }}
          className="cart sm"
        />
      </div>
    </div>
  );
}
