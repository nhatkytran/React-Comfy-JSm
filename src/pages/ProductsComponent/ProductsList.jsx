import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

import loader from "../../imgs/loader.svg";
import upperFirstLetter from "../../utils/upperFirstLetter";
import priceFormatter from "../../utils/priceFormatter";

import { ProductsListStyles } from "../styledComponents";
import { useFilterContext, useProductsContext } from "../../context";

function ProductsList() {
  const { productsLoading, productsError } = useProductsContext();
  const { filteredProducts, gridView } = useFilterContext();

  if (productsLoading) {
    return (
      <div style={{ marginTop: "40px" }}>
        <img src={loader} alt="Loader" />
      </div>
    );
  }

  if (productsError.show) {
    return (
      <div style={{ marginTop: "40px" }}>
        <h3>Something went wrong loading Products</h3>
        <p>Please try again!</p>
        <p>Message: {productsError.message}</p>
      </div>
    );
  }

  if (!filteredProducts.length) {
    return (
      <div style={{ marginTop: "40px" }}>
        <h3>Oopsie! No products matched</h3>
        <p>Try another</p>
      </div>
    );
  }

  return (
    <ProductsListStyles
      className={`products-list ${gridView ? "grid" : "list"}-layout`}
    >
      {filteredProducts.map((product) => {
        const { id, image, name, price, description } = product;

        if (gridView)
          return (
            <ProductGrid
              key={id}
              url={image}
              name={name}
              sku={id}
              price={price}
            />
          );
        return (
          <ProductList
            key={product.id}
            url={image}
            name={name}
            price={price}
            description={description}
            sku={id}
          />
        );
      })}
    </ProductsListStyles>
  );
}

function ProductGrid({ url, name, sku, price }) {
  return (
    <article className="product-grid">
      <div className="img-container">
        <img src={url} alt={name} />
        <Link to={`/products/${sku}`} className="overlay">
          <AiOutlineSearch />
        </Link>
      </div>
      <div>
        <p>{upperFirstLetter(name)}</p>
        <p className="price">{priceFormatter(price)}</p>
      </div>
    </article>
  );
}

function ProductList({ url, name, price, description, sku }) {
  return (
    <article className="product-list">
      <div>
        <div className="image" style={{ backgroundImage: `url(${url})` }}>
          <div className="overlay">
            <AiOutlineSearch />
          </div>
        </div>
      </div>
      <div className="product-list-content">
        <h3>{upperFirstLetter(name)}</h3>
        <p className="price">{priceFormatter(price)}</p>
        <p>{`${description}`.substring(0, 100) + "..."}</p>
        <Link to={`/products/${sku}`} className="btn btn-details">
          DETAILS
        </Link>
      </div>
    </article>
  );
}

export default ProductsList;
