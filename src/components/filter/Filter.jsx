import React from "react";
import { useFilter } from "../../context";

const Filter = () => {
    const {
        FilterState: { byCategory, sortBy, byRating },
        FilterDispatch,
      } = useFilter();
  return (
    <div>
      
          <div className="filter-sidebar">
            <div className="filter-sidebar-heading">
              <span>
                <b>Filters</b>
              </span>
              <button
                className="ecom-btn"
                onClick={() => {
                  FilterDispatch({ type: "Clear_Filter" });
                }}
              >
                Clear
              </button>
            </div>
            <div className="filter-cat">
              <span>
                <b>Category</b>
              </span>
              <label className="filter-item">
                <input
                  type="checkbox"
                  name="category"
                  value={byCategory}
                  onChange={() =>
                    FilterDispatch({ type: "CATEGORY", payload: "Chocolate" })
                  }
                  checked={byCategory && byCategory === "Chocolate"}
                ></input>
                chocolate cake
              </label>
              <label className="filter-item">
                <input
                  type="checkbox"
                  name="category"
                  onChange={() =>
                    FilterDispatch({ type: "CATEGORY", payload: "Vanilla" })
                  }
                  checked={byCategory && byCategory === "Vanilla"}
                ></input>
                vanilla cake
              </label> 
              <label className="filter-item">
                <input
                  type="checkbox"
                  name="category"
                  onChange={() =>
                    FilterDispatch({ type: "CATEGORY", payload: "Red Velvet" })
                  }
                  checked={byCategory && byCategory === "Red Velvet"}
                ></input>
                Red Velvet
              </label>
              <label className="filter-item">
                <input
                  type="checkbox"
                  name="category"
                  onChange={() =>
                    FilterDispatch({
                      type: "CATEGORY",
                      payload: "Butterscotch",
                    })
                  }
                  checked={byCategory && byCategory === "Butterscotch"}
                ></input>
                Butterscotch
              </label>
            </div>
            <div className="filter-cat">
              <span>
                <b>Rating</b>
              </span>
              <label className="filter-item">
                <input
                  type="checkbox"
                  name="rating"
                  value={byRating}
                  onChange={() =>
                    FilterDispatch({ type: "RATING", payload: "3" })
                  }
                  checked={byRating && byRating === "3"}
                ></input>
                3star & above
              </label>
              <label className="filter-item">
                <input
                  type="checkbox"
                  name="rating"
                  value={byRating}
                  onChange={() =>
                    FilterDispatch({ type: "RATING", payload: "4" })
                  }
                  checked={byRating && byRating === "4"}
                ></input>
                4star & above
              </label>
              <label className="filter-item">
                <input
                  type="checkbox"
                  name="rating"
                  value={byRating}
                  onChange={() =>
                    FilterDispatch({ type: "RATING", payload: "5" })
                  }
                  checked={byRating && byRating === "5"}
                ></input>
                5star & above
              </label>
            </div>
            <div className="filter-cat">
              <span>
                <b>Sort by Price</b>
              </span>
              <label className="filter-item">
                <input
                  type="radio"
                  name="sort"
                  onChange={() =>
                    FilterDispatch({
                      type: "SORT",
                      payload: "PRICE_HIGH_TO_LOW",
                    })
                  }
                  checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
                ></input>
                {"   "}Price - High to Low
              </label>
              <label className="filter-item">
                <input
                  type="radio"
                  name="sort"
                  onChange={() =>
                    FilterDispatch({
                      type: "SORT",
                      payload: "PRICE_LOW_TO_HIGH",
                    })
                  }
                  checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
                ></input>{" "}
                 Price - Low to High
              </label>
            </div>
          </div>
        </div>
      
  );
}

export default Filter;
