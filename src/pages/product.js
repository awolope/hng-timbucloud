import React, { useContext } from "react";
import { CartContext } from "./Cartcontext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart();
  };

  return (
    <div className="product">
      <img src={product.Abibasboot} alt={product.name} />
      <h3>{product.name} shoe</h3>
      <p>{product.price} 50k</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
