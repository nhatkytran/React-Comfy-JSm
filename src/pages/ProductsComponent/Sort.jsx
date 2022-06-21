import { SortStyles } from "../styledComponents";
import { IoGrid } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useFilterContext } from "../../context";

function Sort() {
  const { filteredProducts, gridView, handleView, handleSort } =
    useFilterContext();

  return (
    <SortStyles>
      <div className="views">
        <span
          className={`view-btn ${gridView ? "active" : ""} center-flex-display`}
          onClick={handleView.bind(null, true)}
        >
          <IoGrid />
        </span>
        <span
          className={`view-btn ${gridView ? "" : "active"} center-flex-display`}
          onClick={handleView.bind(null, false)}
        >
          <GiHamburgerMenu />
        </span>
        <p className="found">{filteredProducts.length} Products Found</p>
      </div>
      <div className="bar">
        <hr />
      </div>
      <div className="sort">
        <span>Sort By</span>
        <select
          className="sort-select"
          onChange={(event) => handleSort(event.target.value)}
        >
          <option value="price-lowest">Price (Lowest)</option>
          <option value="price-highest">Price (Highest)</option>
          <option value="name-a">Name (A - Z)</option>
          <option value="name-z">Name (Z - A)</option>
        </select>
      </div>
    </SortStyles>
  );
}

export default Sort;
