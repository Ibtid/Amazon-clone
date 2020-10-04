import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://cdn.shopify.com/s/files/1/2397/3683/files/Banner_1.png?7447362320702916151"
          alt="ad"
        />
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/*BasketItem*/}
          {/*BasketItem*/}
          {/*BasketItem*/}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
        <h2>the subtotal here</h2>
      </div>
    </div>
  );
};

export default Checkout;
