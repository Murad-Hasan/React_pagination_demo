import React from "react";
import { FaListUl } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

const Toolbox = () => {
  return (
    <div>
      <div className="toolbar">
        <div className="row">
          <div className="col-sm-12 col-md-2 d-flex justify-content-center align-items-center">
            <div className="modes">
              <div className="mode-switcher-icon">
                <FaListUl fontSize="20px" />
                <BsFillGrid3X3GapFill fontSize="20px" />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-2  d-flex justify-content-center align-items-center">
            <div className="toolbar-amount">
              <span id="collection-amount">Showing 1 to 9 of 9 items</span>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
            <div className="limiter d-flex justify-content-center align-items-center position-relative">
              <label>Show:</label>
              <select name="" id="input-limit" class="form-control w-75">
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="all">All</option>
              </select>
            </div>
          </div>
          <div className="col-sm-12 col-md-4  d-flex justify-content-center align-items-center">
            <div className="sorter d-flex justify-content-center align-items-center">
              <label for="input-sort">Sort by:</label>
              <select
                className="form-control"
                name="input-sort"
                id="input-sort"
              >
                <option value="manual">Featured</option>
                <option value="best-selling">Best Selling</option>
                <option value="title-ascending">Alphabetically, A-Z</option>
                <option value="title-descending">Alphabetically, Z-A</option>
                <option value="price-ascending">Price, low to high</option>
                <option value="price-descending">Price, high to low</option>
                <option value="created-descending">Date, new to old</option>
                <option value="created-ascending">Date, old to new</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbox;
