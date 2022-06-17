import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

import loader from "../imgs/loader.svg";
import priceFormatter from "../utils/priceFormatter";

import { useProductsContext } from "../context";
import { FeaturedProductsStyles } from "./styledComponents";

function FeaturedProducts() {
  const { productsLoading, productsError, featuredProducts } =
    useProductsContext();

  if (productsLoading)
    return (
      <FeaturedProductsStyles>
        <div className="app">
          <div className="fp-loader">
            <img src={loader} alt="Loader" />
          </div>
        </div>
      </FeaturedProductsStyles>
    );

  if (productsError.show)
    return (
      <FeaturedProductsStyles>
        <div className="app">
          <div className="fp-error">
            <h3>Something went wrong loading Featured Products</h3>
            <p>Please try again!</p>
            <p>Message: {productsError.message}</p>
          </div>
        </div>
      </FeaturedProductsStyles>
    );

  return (
    <FeaturedProductsStyles>
      <div className="app">
        <div className="featured-products">
          <h2 className="underline">Featured Products</h2>
          <div className="fp-products">
            {featuredProducts.map((item) => {
              return (
                <article key={item.id}>
                  <div
                    className="img"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <Link to={`/products/${item.id}`} className="img-overlay">
                      <AiOutlineSearch />
                    </Link>
                  </div>
                  <div className="info">
                    <p className="name">{item.name}</p>
                    <p className="price">{priceFormatter(item.price)}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <button className="btn btn-all-products">ALL PRODUCTS</button>
        </div>
      </div>
    </FeaturedProductsStyles>
  );
}

export default FeaturedProducts;
