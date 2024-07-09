import React from "react";
import "./head.css";
import "../background.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
export default function Head(params) {
  return (
    <div className="head container sm">
      <Navbar />
      <div>
        <h1 className="h1head sm">Eternal Classics, Enduring Style</h1>
        <h2 className="h2head sm">
          From elegant dresses to tailored suits, find pieces that stand the
          test of time
        </h2>
      </div>
      <div className="shopdiv sm">
        <Link to="/Shop" className="shoplink">
          Shop
        </Link>
        <a href="/" className="arrowUp">
          <FaArrowUp />
        </a>
      </div>
      <div className="clockdiv sm">
        <div>
          <FaClock className="clock" />
          <p className="daily">Daily Arrivals</p>
        </div>
        <div>
          <FaInfinity className="infinity" />{" "}
          <p className="hassle">Hassle Free Shopping</p>
        </div>
        <div>
          <FaShoppingBag className="shoppingbag" />
          <p className="unlimited"> Unllimited Items</p>
        </div>
      </div>
    </div>
  );
}
