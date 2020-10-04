import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [state, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://cdn.shopify.com/s/files/1/2397/3683/files/Banner_1.png?7447362320702916151"
          alt="ad"
        />
        <div>
          <h3>Hello, {state.user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {state.basket.map((basketItem) => (
            <CheckoutProduct
              id={basketItem.id}
              image={basketItem.image}
              title={basketItem.title}
              price={basketItem.price}
              rating={basketItem.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
