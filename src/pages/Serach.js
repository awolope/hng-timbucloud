import React from "react";
import "./search.css";
import { FaInfinity } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container-fluid sm">
      <form onSubmit={handleSubmit} className="simple-search-form sm">
        <input
          type="text"
          placeholder="Search..."
          className="simple-search-input sm"
        />
        <button type="submit" className="simple-search-btn sm">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
