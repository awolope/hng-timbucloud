import React from "react";
import "./searchbar.css";
import { FaArrowUp } from "react-icons/fa";
const Search = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container-fluid sm">
      <form onSubmit={handleSubmit} className="search-form sm">
        <input
          type="text"
          placeholder="Search..."
          className="search-input sm"
        />
        <br />
        <div className="btndiv">
          <button type="submit" className="search-btn sm">
            Submit
          </button>
          <div className="arrow">
            <FaArrowUp />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Search;
