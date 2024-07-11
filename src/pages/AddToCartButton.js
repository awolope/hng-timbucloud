import React from "react";
import "./adddtocartbutton.css";
import { FaShoppingCart } from "react-icons/fa";
const AddToCartButton = ({ onClick }) => {
  return (
    <button className="addtocartbtn" onClick={onClick}>
      <FaShoppingCart />
    </button>
  );
};

export default AddToCartButton;
