import React from "react";

const Filter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div className="filter">
      <div>
        <label htmlFor="title-filter">Title:</label>
        <input type="text" id="title-filter" onChange={onTitleChange} />
      </div>
      <div>
        <label htmlFor="rating-filter">Rating:</label>
        <select id="rating-filter" onChange={onRatingChange}>
          <option value="0">All</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
