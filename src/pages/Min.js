import React from "react";
import "./Main.css";
import "../man.png";
import "../woman.png";
export default function Main(params) {
  return (
    <div className="maindiv container-fluid sm">
      <h1 className="mainh1 sm">
        Discover <span className="focus"> Timeless Beauty</span>
      </h1>
      <div className="mindiv1 sm">
        <div className="imagediv1 sm">
          <h2 className="minh2 sm">
            <span className="focus sm">Fresh Looks For</span>
            <br /> The Modern Classic
          </h2>
          <p className="minp1">
            Discover the perfect fusion of classic charm and modern trends. Our
            new collection offers fresh looks that embody sophistication and
            style, ideal for the discerning fashionista who values both
            tradition and innovation
          </p>
        </div>
        <div className="imagemindiv1 sm">
          <img src="./woman.png" alt="" className="img sm"></img>
        </div>
      </div>
      <div className="mindiv2">
        <div className="imagediv2">
          <img src="./man.png" alt="" className="img2"></img>
        </div>
        <div className="imagediv3">
          <h3 className="minh2">
            <span className="focus"> Standing Out </span>
            In Style
          </h3>
          <p className="minp1">
            Make a statement with our bold and stylish collection. Designed for
            those who dare to be different, our pieces blend contemporary trends
            with unique designs.
          </p>
        </div>
      </div>
    </div>
  );
}
