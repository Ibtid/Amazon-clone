import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>the lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>★</p>
          <p>★</p>
          <p>★</p>
        </div>
      </div>
      <img
        src="https://elcopcbonline.com/photos/product/4/176/4.jpg"
        alt="product"
      />
      <button>Add To Busket</button>
    </div>
  );
};

export default Product;
