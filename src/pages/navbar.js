import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import SearchBar from "./Serach";
export default function Navbar(params) {
  return (
    <div className="navdi sm">
      <div className="logoiv sm">
        <p className="logo sm"> TimberClouds</p>
        <p className="minilogo sm">TM</p>
      </div>
      <div className="mavbar sm">
        <Link to="/TimbuClouds" className="mavbar-link">
          Home
        </Link>
        <Link to="/Shop" className="mavabar-link">
          Shop
        </Link>
      </div>
      <div className="search sm">
        <SearchBar />
      </div>
    </div>
  );
}
