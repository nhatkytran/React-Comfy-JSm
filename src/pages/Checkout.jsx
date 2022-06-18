import { useState, useEffect } from "react";

import { CheckoutStyles } from "./styledComponents";
import { PageHero } from "../components";

function Checkout() {
  const [height, setHeight] = useState("660px");

  useEffect(() => {
    const navbarRect = document
      .querySelector(".navbar")
      .getBoundingClientRect();
    const footerRect = document
      .querySelector(".footer")
      .getBoundingClientRect();
    const pageHeroRect = "17vh";

    // const pageHeroRect = document
    //   .querySelector(".page-hero")
    //   .getBoundingClientRect();

    // Instead of getting pageHeroRect from the DOM
    // set pageHeroRect = 17vh because that is the value
    // set for pageHero's height in css

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
          <div className="checkout-content">Checkout</div>
        </div>
      </CheckoutStyles>
    </div>
  );
}

export default Checkout;
