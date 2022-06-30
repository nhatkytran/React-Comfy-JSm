import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { CheckoutStyles } from "./styledComponents";
import { useCartContext } from "../context";
import { PageHero } from "../components";
import { StripeCheckout } from "./CheckoutComponent";
function Checkout() {
  const [height, setHeight] = useState("660px");
  const { cart } = useCartContext();

  useEffect(() => {
    const navbarRect = document
      .querySelector(".navbar")
      .getBoundingClientRect();
    const footerRect = document
      .querySelector(".footer")
      .getBoundingClientRect();
    const pageHeroRect = "17vh";

    setHeight(
      `calc(100vh - ${pageHeroRect} - ${navbarRect.height}px - ${footerRect.height}px)`
    );
  }, []);

  return (
    <div
      className="checkout-container"
      style={{
        backgroundColor: "var(--main-bg)",
      }}
    >
      <PageHero title="checkout" />
      <CheckoutStyles
        className="checkout"
        style={{ width: "100%", minHeight: height }}
      >
        <div className="app">
          {cart.length === 0 && (
            <div className="checkout-empty">
              <h3>Your cart is now empty</h3>
              <Link to="/products" className="btn">
                SHOW NOW
              </Link>
            </div>
          )}
          {cart.length > 0 && (
            <div className="checkout-content">
              <StripeCheckout />
            </div>
          )}
        </div>
      </CheckoutStyles>
    </div>
  );
}

export default Checkout;
