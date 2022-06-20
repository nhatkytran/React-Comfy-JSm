import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

import desk from "../../imgs/nice-desk.jpeg";
import upperFirstLetter from "../../utils/upperFirstLetter";

import { ProductsListStyles } from "../styledComponents";

function ProductsList() {
  return (
    <ProductsListStyles className="products-list grid-layout">
      <ProductGrid />
      <ProductGrid />
      <ProductGrid />
      <ProductGrid />
      <ProductGrid />
      <ProductGrid />
      <ProductGrid />
      <ProductGrid />
      <ProductGrid />
      <ProductGrid />
      <ProductGrid />
      <ProductGrid />
      <ProductGrid />
      <ProductGrid />
      <ProductGrid />
    </ProductsListStyles>
  );
}

function ProductGrid() {
  return (
    <article className="product-grid">
      <div to="/products/id" className="img-container">
        <img src={desk} alt="Test" />
        <Link to="/" className="overlay">
          <AiOutlineSearch />
        </Link>
      </div>
      <div>
        <p>{upperFirstLetter("name")}</p>
        <p className="price">100</p>
      </div>
    </article>
  );
}

function ProductList() {
  return (
    <article className="product-list">
      <div>
        <div className="image">
          <div className="overlay">
            <AiOutlineSearch />
          </div>
        </div>
      </div>
      <div className="product-list-content">
        <h3>{upperFirstLetter("your name")}</h3>
        <p className="price">Price</p>
        <p>
          {`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            iste quas minima qui tempore porro quos provident labore voluptas
            omnis?`.substring(0, 100) + "..."}
        </p>
        <button className="btn btn-details">DETAILS</button>
      </div>
    </article>
  );
}

export default ProductsList;
