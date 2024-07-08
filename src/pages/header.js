import React from "react";
import "./head.css";
import "../background.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaInfinity } from "react-icons/fa";
import SearchBar from "./Serach";
export default function Head(params) {
  return (
    <div className="head container-fluid sm">
      <div className="navdiv sm">
        <div className="logoiv sm">
          <p className="logo sm"> TimberClouds</p>
          <p className="minilogo sm">TM</p>
        </div>
        <div className="mavbar sm">
          <a href="/"> Home</a>
          <a href="/"> Shop</a>
        </div>
        <div className="search sm">
          <SearchBar />
        </div>
      </div>
      <div>
        <h1 className="h1head sm">Eternal Classics, Enduring Style</h1>
        <h2 className="h2head sm">
          From elegant dresses to tailored suits, find pieces that stand the
          test of time
        </h2>
      </div>
      <div className="shopdiv sm">
        <a href="/" className="shoplink sm">
          Shop Now
        </a>
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
