import React from "react";
import { Link } from "react-router-dom";

import upperFirstLetter from "../utils/upperFirstLetter";

import { PageHeroStyles } from "./styledComponents";
import { useProductsContext } from "../context";

function PageHero({ title, isSingleProduct }) {
  const { singleProduct } = useProductsContext();

  if (isSingleProduct) title = singleProduct?.name;

  const pageHeroNormal = (
    <React.Fragment>
      <Link to="/">Home</Link>
      <span>/</span>
      <Link
        to={`/${title}`}
        style={{
          color: "#92caff",
        }}
      >
        {upperFirstLetter(title)}
      </Link>
    </React.Fragment>
  );
  const pageHeroSingleProduct = (
    <React.Fragment>
      <Link to="/">Home</Link>
      <span>/</span>
      <Link to="/products">Products</Link>
      <span>/</span>
      <Link
        to={`/products/${singleProduct?.id}`}
        style={{
          color: "#92caff",
        }}
      >
        {upperFirstLetter(title)}
      </Link>
    </React.Fragment>
  );

  return (
    <PageHeroStyles className="page-hero">
      <div className="app">
        <div className="page-hero-content">
          {!isSingleProduct && pageHeroNormal}
          {isSingleProduct && pageHeroSingleProduct}
        </div>
      </div>
    </PageHeroStyles>
  );
}

export default PageHero;
