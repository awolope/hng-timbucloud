import React from "react";
import "./Shop.css";
import "../shopwoman.png";
import Navbar from "./navbar";
import "../Italian Leather.png";
import "../Beringaboot.png";
import { FaShoppingCart } from "react-icons/fa";
export default function Shop(params) {
  return (
    <div>
      <Navbar />
      <h1 className="shoph1"> Our Collections</h1>
      <img src="./shopwoman.png" alt="" className="shopimage1"></img>
      <hr />
      <div className="imgrow">
        <div className="imgro">
          <div className="shimg1">
            <p className="promo">20% Off</p>
            <img
              src="./Italian Leather.png"
              className="italianleather"
              alt="Italian Leather"
            ></img>
            <FaShoppingCart />
          </div>
        </div>

        <div className="shimg1">
          <p className="promo">20% Off</p>
          <img
            src="./Italian Leather.png"
            className="italianleather"
            alt="Italian Leather"
          ></img>
          <FaShoppingCart />
        </div>

        <div className="shimg1">
          <p className="promo">20% Off</p>
          <img
            src="./Italian Leather.png"
            className="italianleather"
            alt="Italian Leather"
          ></img>
          <FaShoppingCart />
        </div>

        <div className="shimg1">
          <p className="promo">20% Off</p>
          <img
            src="./Italian Leather.png"
            className="italianleather"
            alt="Italian Leather"
          ></img>
        </div>
      </div>
    </div>
  );
}
