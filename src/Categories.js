import React, { useState } from "react";

const Categories = ({ categories, theFilterItem }) => {
  return (
    <div className="btn-container">
      {categories.map((theCategory, index) => {
        return (
          <button
            className="filter-btn"
            type="button"
            key={index}
            onClick={() => theFilterItem(theCategory)}
          >
            {theCategory}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
