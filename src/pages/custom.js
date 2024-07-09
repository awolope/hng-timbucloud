import React from "react";
import "./custom.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
export default function Custom() {
  return (
    <div className="customdiv">
      <div className="custom">
        <p>
          <strong>Customer Service</strong>
        </p>
        <a href="/">General Terms of Use</a>
        <br />
        <a href="/"> Payment</a>
        <br />
        <a href="/"> Refund Policy</a>
      </div>

      <div className="custom">
        <p>
          <strong>Pages</strong>
        </p>
        <a href="/">Blogs</a>
        <br />
        <a href="/"> Support</a>
        <br />
        <a href="/"> faQ</a>
      </div>
      <div className="customer">
        <p>
          <strong>Follow Us</strong>
        </p>
        <a href="/">
          {" "}
          <FaInstagram className="icon instagram-icon" />
        </a>

        <a href="/">
          {" "}
          <FaTwitter className="icon twitter-icon" />
        </a>

        <a href="/">
          {" "}
          <FaFacebook className="icon facebook-icon" />
        </a>
      </div>
    </div>
  );
}
