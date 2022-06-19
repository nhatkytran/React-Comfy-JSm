import { SortStyles } from "../styledComponents";
import { IoGrid } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

function Sort() {
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
        <select className="sort-select" name="" id="">
          <option value="">Name (A - Z)</option>
        </select>
      </div>
    </SortStyles>
  );
}

export default Sort;
