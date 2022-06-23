import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { CartStyles } from "./styledComponents";
import { PageHero } from "../components";
import CartItem from "./CartComponent/CartItem";
import CartPay from "./CartComponent/CartPay";

function Cart() {
  const [height, setHeight] = useState("660px");

  useEffect(() => {
    const navbarRect = document
      .querySelector(".navbar")
      .getBoundingClientRect();
    const footerRect = document
      .querySelector(".footer")
      .getBoundingClientRect();

    setHeight(`calc(100vh - ${navbarRect.height}px - ${footerRect.height}px)`);
  }, []);

  return (
    <CartStyles style={{ width: "100%", minHeight: `${height}` }}>
      <PageHero title="cart" />
      <div className="app">
        <div className="cart">
          <div className="titles-row hide">
            <p>Item</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
            <span></span>
          </div>
          <hr className="hide" />
          <div className="items">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <hr />
          <div className="handle">
            <Link to="/products" className="btn continue">
              Continue Shopping
            </Link>
            <button className="btn clear">Clear Shopping Cart</button>
          </div>
        </div>
        <CartPay />
      </div>
    </CartStyles>
  );
}

export default Cart;
