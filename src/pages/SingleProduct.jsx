import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import loader from "../imgs/loader.svg";
import upperFirstLetter from "../utils/upperFirstLetter";
import priceFormatter from "../utils/priceFormatter";

import { handleCancelToken } from "../axios/authFetch";
import { useProductsContext } from "../context";
import { SingleProductStyles } from "./styledComponents";
import { PageHero } from "../components";
import { Images, Stars, AddToCarts } from "./SingleProductComps";

function SingleProduct() {
  const navigate = useNavigate();
  const [height, setHeight] = useState("660px");
  const {
    singleProductLoading,
    singleProductError,
    singleProduct,
    fetchSingleProduct,
  } = useProductsContext();
  const { name, price, description, stock, id: sku, company } = singleProduct;

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

  useEffect(() => {
    fetchSingleProduct(`/react-store-single-product?id=recNZ0koOqEmilmoz`);

    return () => handleCancelToken();
  }, [fetchSingleProduct]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (singleProductError.show) navigate("/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [singleProductError, navigate]);

  if (singleProductLoading)
    return (
      <SingleProductStyles style={{ width: "100%", minHeight: height }}>
        <PageHero title="single-product" isSingleProduct />
        <div className="app">
          <img src={loader} alt="Loader" />
        </div>
      </SingleProductStyles>
    );

  if (singleProductError.show)
    return (
      <SingleProductStyles style={{ width: "100%", minHeight: height }}>
        <PageHero title="single-product" isSingleProduct />
        <div className="app">
          <div className="sp-error" style={{ marginTop: "40px" }}>
            <h3>Something went wrong loading Featured Products</h3>
            <p>Please try again!</p>
            <p>Message: {singleProductError.message}</p>
          </div>
        </div>
      </SingleProductStyles>
    );

  return (
    <SingleProductStyles style={{ width: "100%", minHeight: height }}>
      <PageHero isSingleProduct />
      <div className="app">
        <div className="single-product">
          <div className="btn-single-product-container">
            <button className="btn btn-single-product">ALL PRODUCTS</button>
          </div>
          <div className="single-product-main">
            <Images />
            <div className="single-product-main-right">
              <h2>{upperFirstLetter(name)}</h2>
              <Stars />
              <div className="price">{priceFormatter(price)}</div>
              <p>{description}</p>
              <div>
                <span style={{ fontWeight: "bold" }}>Available:</span>
                <span>
                  {stock > 0 ? `In Stock (${stock})` : "Out Of Stock"}
                </span>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>SKU:</span>
                <span>{` ${sku}`}</span>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Brand:</span>
                <span
                  style={{ textTransform: "uppercase" }}
                >{` ${company}`}</span>
              </div>
              <hr />
              {stock > 0 && <AddToCarts />}
            </div>
          </div>
        </div>
      </div>
    </SingleProductStyles>
  );
}

export default SingleProduct;
