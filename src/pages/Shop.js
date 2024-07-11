import React, { useState } from "react";
import Footer from "./footer";
import Custom from "./custom";
import "./Shop.css";
import "../Brown Italian Leather.png";
import "../Abibas boot.png";
import "../Beringa.png";
import "../Black benz.png";
import "../Capenter.png";
import "../Cover shoe.png";
import "../Dragon.png";
import "../Dunk.png";
import "../Mike Dunk.png";
import "../Ningolan.png";
import "../Pink hose.png";
import "../Poesidon.png";
import "../Shikina.png";
import "../Teringo.png";
import "../canvas.png";
import "../Silicon.png";
import "../shopwoman.png";
import Navbar from "./navbar";
import AddToCartButton from "./AddToCartButton";
import CartCount from "./CartCount";
import "../Italian Leather.png";
import "../silican leather.png";
import "../Beringa boot.png";
import "../Bronze.png";

const Shop = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };
  return (
    <div className="container-fluid sm">
      <span>
        <Navbar /> <CartCount count={cartCount} />
      </span>
      <h1 className="shoph1 sm"> Our Collections</h1>
      <img src="./shopwoman.png" alt="" className="shopimage1"></img>
      <hr />
      <div className="imgrow sm">
        <div className="imgro sm">
          <div className="shimg1 sm">
            <p className="promo sm">20% Off</p>
            <img
              src="./Italian Leather.png"
              className="shoeimagesit"
              alt="Italian Leather"
            ></img>
            <div className="addtocartbtn sm">
              <AddToCartButton onClick={addToCart} />
            </div>
          </div>

          <p className="price">
            Italian Leather
            <br />
            <span className="initialprice">₦80,000 </span>
            <span className="newprice"> ₦64,000</span>
          </p>
        </div>
        <div className="imgro">
          <div className="shimg1">
            <p className="promo">5% Off</p>
            <img
              src="./Beringa boot.png"
              className="shoeimages mb-1"
              alt="Beringa boot"
            ></img>

            <div className="addtocartbtn">
              <AddToCartButton onClick={addToCart} />
            </div>
          </div>

          <p className="price">
            Beringa boot
            <br />
            <span className="initialprice">₦60,000 </span>
            <span className="newprice"> ₦57,000</span>
          </p>
        </div>
        <div className="imgro">
          <div className="shimg1">
            <p className="promo">10% Off</p>
            <img
              src="./silican leather.png"
              className="shoeimages "
              alt="silicanLeather"
            ></img>
            <div className="addtocartbtn">
              <AddToCartButton onClick={addToCart} />
            </div>
          </div>

          <p className="price">
            Silican Leather
            <br />
            <span className="initialprice">₦70,000 </span>
            <span className="newprice">₦63,000 </span>
          </p>
        </div>

        <div className="imgro">
          <div className="shimg1">
            <p className="promo">20% Off</p>
            <img
              src="./Bronze.png"
              className="shoeimages"
              alt="Bronze shoe"
            ></img>
            <div className="addtocartbtn">
              <AddToCartButton onClick={addToCart} />
            </div>
          </div>
          <p className="price">
            Bronze shoe
            <br />
            <span className="initialprice">₦90,000 </span>
            <span className="newprice"> ₦70,000 </span>
          </p>
        </div>
      </div>
      <div className="imgrow">
        <div className="imgro">
          <div className="shimg1">
            <img src="./Shikina.png" className="shoeimages" alt="Shikina"></img>
            <div className="addtocartbtn">
              <AddToCartButton onClick={addToCart} />
            </div>
          </div>

          <p className="price">
            Shikina
            <br />
            <span className="newprice">₦50,000</span>
          </p>
        </div>
        <div className="imgro">
          <div className="shimg1">
            <img
              src="./Cover shoe.png"
              className="shoeimages"
              alt="Cover shoe"
            ></img>
            <div className="addtocartbtn">
              <AddToCartButton onClick={addToCart} />
            </div>
          </div>
          <p className="price">
            Cover shoe
            <br />
            <span className="newprice">₦64,000</span>
          </p>
        </div>
        <div className="imgro">
          <div className="shimg1">
            <img
              src="./Pink hose.png"
              className="shoeimages"
              alt="Pink hose"
            ></img>
            <div className="addtocartbtn">
              <AddToCartButton onClick={addToCart} />
            </div>
          </div>

          <p className="price">
            Pink Hose
            <br />
            <span className="newprice">₦64,000</span>
          </p>
        </div>
        <div className="imgrow">
          <div className="imgro">
            <div className="shimg1">
              <img
                src="./Abibas boot.png"
                className="shoeimages"
                alt="Abibas boot"
              ></img>
              <div className="addtocartbtn">
                <AddToCartButton onClick={addToCart} />
              </div>
            </div>
            <p className="price">
              Abibas boot
              <br />
              <span className="newprice">₦64,000</span>
            </p>
          </div>
        </div>
      </div>
      <div className="imgrow">
        <div className="imgro">
          <div className="shimg1">
            <img
              src="./Mike Dunk.png"
              className="shoeimages"
              alt="Mike Dunk"
            ></img>
            <div className="addtocartbtn">
              <AddToCartButton onClick={addToCart} />
            </div>
          </div>

          <p className="price">
            Mike Dunk
            <br />
            <span className="newprice">₦64,000</span>
          </p>
        </div>
        <div className="imgro">
          <div className="shimg1">
            <img src="./Beringa.png" className="shoeimages" alt="Beringa"></img>
            <div className="addtocartbtn">
              <AddToCartButton onClick={addToCart} />
            </div>
          </div>
          <p className="price">
            Beringa
            <br />
            <span className="newprice">₦64,000</span>
          </p>
        </div>
        <div className="imgro">
          <div className="shimg1">
            <img
              src="./Black benz.png"
              className="shoeimages"
              alt="Black benz"
            ></img>
            <div className="addtocartbtn">
              <AddToCartButton onClick={addToCart} />
            </div>
          </div>
          <p className="price">
            Black benz
            <br />
            <span className="newprice">₦64,000</span>
          </p>
        </div>

        <div className="imgro">
          <div className="shimg1">
            <img
              src="./Brown Italian Leather.png"
              className="shoeimages"
              alt="Italian Leather"
            ></img>
            <div className="addtocartbtn">
              <AddToCartButton onClick={addToCart} />
            </div>
          </div>
          <p className="price">
            Italian Leather
            <br />
            <span className="newprice">₦64,000</span>
          </p>
        </div>
      </div>
      <div className="imgrow">
        <div className="imgro">
          <div className="shimg1">
            <img
              src="./Poesidon.png"
              className="shoeimages"
              alt="Poesidon"
            ></img>
            <div className="addtocartbtn">
              <AddToCartButton onClick={addToCart} />
            </div>
          </div>
          <p className="price">
            Poesidon
            <br />
            <span className="newprice"> ₦64,000</span>
          </p>
        </div>
        <div className="imgro">
          <div className="shimg1">
            <img
              src="./Capenter.png"
              className="shoeimages"
              alt="Capenter"
            ></img>
            <div className="addtocartbtn">
              <AddToCartButton onClick={addToCart} />
            </div>
          </div>
          <p className="price">
            Carpenter
            <br />
            <span className="newprice">₦64,000</span>
          </p>
        </div>
        <div className="imgro">
          <div className="shimg1">
            <img
              src="./Ningolan.png"
              className="shoeimages"
              alt="Ningolan"
            ></img>
            <div className="addtocartbtn">
              <AddToCartButton onClick={addToCart} />
            </div>
          </div>
          <p className="price">
            Ningolan
            <br />
            <span className="newprice">₦64,000</span>
          </p>
        </div>
        <div className="imgro">
          <div className="shimg1">
            <img src="./Dunk.png" className="shoeimages" alt="Dunk"></img>
            <div className="addtocartbtn">
              <AddToCartButton onClick={addToCart} />
            </div>
          </div>
          <p className="price">
            Dunk
            <br />
            <span className="newprice">₦64,000</span>
          </p>
        </div>
      </div>
      <div className="imgrow">
        <div className="imgro">
          <div className="shimg1">
            <img src="./Canvas.png" className="shoeimages" alt="Canvas"></img>
            <div className="addtocartbtn">
              <AddToCartButton onClick={addToCart} />
            </div>
          </div>
          <p className="price">
            Canvas
            <br />
            <span className="newprice">₦64,000</span>
          </p>
        </div>
        <div className="imgro">
          <div className="shimg1">
            <img src="./Teringo.png" className="shoeimages" alt="Teringo"></img>
            <div className="addtocartbtn">
              <AddToCartButton onClick={addToCart} />
            </div>
          </div>
          <p className="price">
            Teringo
            <br />
            <span className="newprice">₦64,000</span>
          </p>
        </div>
        <div className="imgro">
          <div className="shimg1">
            <img src="./Dragon.png" className="shoeimages" alt="Dragon"></img>
            <div className="addtocartbtn">
              <AddToCartButton onClick={addToCart} />
            </div>
          </div>
          <p className="price">
            Dragon
            <br />
            <span className="newprice">₦64,000</span>
          </p>
        </div>
        <div className="imgro">
          <div className="shimg1">
            <img src="./Silicon.png" className="shoeimages" alt="Silicon"></img>
            <div>
              <div className="addtocartbtn">
                <AddToCartButton onClick={addToCart} />
              </div>
            </div>
          </div>
          <p className="price">
            Silicon
            <br />
            <span className="newprice">₦64,000</span>
          </p>
        </div>
      </div>
      <div className="mainfooter3">
        <Custom />
      </div>
      <Footer />
    </div>
  );
};
export default Shop;
