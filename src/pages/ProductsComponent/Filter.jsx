function Filter() {
  return (
    <div className="filters">
      <input type="text" placeholder="Search" />
      <div>
        <h3>Category</h3>
        <ul>
          <li>All</li>
          <li>Office</li>
          <li>Living Room</li>
          <li>Kitchen</li>
          <li>Bedroom</li>
          <li>Dining</li>
          <li>Kids</li>
        </ul>
      </div>
      <div>
        <h3>Company</h3>
        <select>
          <option value="">All</option>
          <option value="">Marcos</option>
          <option value="">Liddy</option>
          <option value="">Ikea</option>
          <option value="">Caressa</option>
        </select>
      </div>
      <div>
        <h3>Colors</h3>
        <span>All</span>
        <span>All</span>
        <span>All</span>
        <span>All</span>
        <span>All</span>
        <span>All</span>
      </div>
      <div>
        <h3>Price</h3>
        <p>Price</p>
        <input type="range" />
      </div>
      <div>
        <label>Free Shipping</label>
        <input type="checkbox" />
      </div>
      <div>
        <button className="btn">Clear Filters</button>
      </div>
    </div>
  );
}

export default Filter;
