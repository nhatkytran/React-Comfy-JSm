import { useEffect, useState } from "react";
import { ProductsStyles } from "./styledComponents";
import { PageHero } from "../components";
import { Filter, Sort, ProductsList } from "./ProductsComponent";

function Products() {
  const [height, setHeight] = useState("100vh");

  useEffect(() => {
    const navbarRect = document
      .querySelector(".navbar")
      .getBoundingClientRect();
    const footerRect = document
      .querySelector(".footer")
      .getBoundingClientRect();

    // const pageHeroRect = document
    //   .querySelector(".page-hero")
    //   .getBoundingClientRect();

    // Instead of getting pageHeroRect from the DOM
    // set pageHeroRect = 17vh because that is the value
    // set for pageHero's height in css

    setHeight(`calc(100vh - ${navbarRect.height}px - ${footerRect.height}px)`);
  }, []);

  return (
    <ProductsStyles style={{ width: "100%", minHeight: height }}>
      <PageHero title="products" />
      <div className="app">
        <div className="products-container">
          <Filter />
          <div>
            <Sort />
            <ProductsList />
          </div>
        </div>
      </div>
    </ProductsStyles>
  );
}

export default Products;
