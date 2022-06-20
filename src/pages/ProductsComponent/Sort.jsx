import { SortStyles } from "../styledComponents";
import { IoGrid } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

function Sort() {
  function handlePrice() {}

  return (
    <SortStyles>
      <div className="views">
        <span className="center-flex-display">
          <IoGrid />
        </span>
        <span className="center-flex-display">
          <GiHamburgerMenu />
        </span>
        <p className="found">23 Products Found</p>
      </div>
      <div className="bar">
        <hr />
      </div>
      <div className="sort">
        <span>Sort By</span>
        <select
          className="sort-select"
          value="price-lowest"
          onChange={handlePrice}
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
