import { BsArrowUpShort } from "react-icons/bs";
import { useFilterContext } from "../../context";
import priceFormatter from "../../utils/priceFormatter";
import upperFirstLetter from "../../utils/upperFirstLetter";
import { FilterStyles } from "../styledComponents";

function Filter() {
  const { nonFilteredProducts, filters, handleFilterConditions } =
    useFilterContext();
  const { categories, companies, colors } = nonFilteredProducts.reduce(
    (acc, cur) => {
      const { category, company, colors } = cur;

      acc.categories.add(category);
      acc.companies.add(company);
      acc.colors = new Set(["all", ...acc.colors, ...colors]);

      return acc;
    },
    {
      categories: new Set(["all"]),
      companies: new Set(["all"]),
      colors: new Set(),
    }
  );

  return (
    <FilterStyles>
      <div className="filter">
        <input
          type="text"
          placeholder="Search"
          name="text"
          value={filters.text}
          onChange={handleFilterConditions}
        />
        <div className="category">
          <h3>Category</h3>
          <ul>
            {[...categories].map((category, index) => {
              return (
                <li
                  key={index}
                  className={`${filters.category === category ? "active" : ""}`}
                  name="category"
                  value={category}
                  onClick={handleFilterConditions}
                >
                  {upperFirstLetter(category)}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <select name="company" onChange={handleFilterConditions}>
            {[...companies].map((company, index) => {
              return (
                <option key={index} value={company}>
                  {upperFirstLetter(company)}
                </option>
              );
            })}
          </select>
        </div>
        <div className="colors">
          <h3>Colors</h3>
          {[...colors].map((color, index) => {
            if (color === "all")
              return (
                <span
                  key={index}
                  className={`${filters.color === color ? "active" : ""}`}
                  name="color"
                  value={color}
                  onClick={handleFilterConditions}
                >
                  All
                </span>
              );
            return (
              <span
                key={index}
                className={`color ${filters.color === color ? "active" : ""}`}
                style={{ backgroundColor: color }}
                name="color"
                value={color}
                onClick={handleFilterConditions}
              >
                <span className="arrow">
                  <BsArrowUpShort />
                </span>
              </span>
            );
          })}
        </div>
        <div className="price">
          <h3>Price</h3>
          <p>Price</p>
          <div className="price-range">
            <span>{priceFormatter(filters.price)}</span>
          </div>
          <input
            type="range"
            min={filters.min}
            max={filters.max}
            name="price"
            value={filters.price}
            onChange={handleFilterConditions}
          />
          <div className="shipping">
            <label htmlFor="shipping">Free Shipping</label>
            <input
              id="shipping"
              type="checkbox"
              name="shipping"
              checked={filters.shipping}
              onChange={handleFilterConditions}
            />
          </div>
        </div>
        <div>
          <button
            className="btn btn-clear-filters"
            onClick={handleFilterConditions.bind(null, null, true)}
          >
            Clear Filters
          </button>
        </div>
      </div>
    </FilterStyles>
  );
}

export default Filter;
