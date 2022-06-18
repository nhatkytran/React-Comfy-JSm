import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import loader from "../imgs/loader.svg";

import { useProductsContext } from "../context";
import { SingleProductStyles } from "./styledComponents";
import { PageHero } from "../components";
import { Images, Stars, AddToCarts } from "./SingleProductComps";

function SingleProduct() {
  const navigate = useNavigate();
  const [height, setHeight] = useState("660px");
  const {
    rootURL,
    singleProductLoading,
    singleProductError,
    singleProduct,
    fetchSingleProduct,
  } = useProductsContext();

  console.log(singleProduct);

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
    fetchSingleProduct(
      `${rootURL}/react-store-single-product?id=recNZ0koOqEmilmoz`
    );
  }, [fetchSingleProduct]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (singleProductError.show) navigate("/");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [singleProductError]);

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
      <PageHero title="single-product" isSingleProduct />
      <div className="app">
        <div className="single-product">
          <div className="btn-single-product-container">
            <button className="btn btn-single-product">ALL PRODUCTS</button>
          </div>
          <div className="single-product-main">
            <Images />
            <div className="single-product-main-right">
              <h2>Entertainment Center</h2>
              <Stars />
              <div className="price">599</div>
              <p>
                Cloud bread VHS hell of banjo bicycle rights jianbing umami
                mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr
                dreamcatcher waistcoat, authentic chillwave trust fund. Viral
                typewriter fingerstache pinterest pork belly narwhal. Schlitz
                venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki
                trust fund hashtag kinfolk microdosing gochujang live-edge
              </p>
              <div>
                <span style={{ fontWeight: "bold" }}>Available:</span>
                <span> In Stock</span>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>SKU:</span>
                <span> RecNZ0koOqEmilmoz</span>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Brand:</span>
                <span> Caressa</span>
              </div>
              <hr />
              <AddToCarts />
            </div>
          </div>
        </div>
      </div>
    </SingleProductStyles>
  );
}

export default SingleProduct;
