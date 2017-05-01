import React from 'react';
import PropTypes from 'prop-types';
import Categories from './Categories.jsx'

const Filter = ({ categories, selected, filterBy, onSearch }) => {
  return (
    <div className="flex-container sortAndSearch">
      {
        categories &&
        <Categories
          categories={ categories }
          selected={ selected }
          onChange={ filterBy }
          sortcss={{
            "backgroundColor":"#e0dede",
            "lineHeight":"4.6",
            "marginLeft":"50px",
            "flexGrow":"0",
            "width":"80px",
            "overflow":"visible"
          }}
        />
      }
      <div>
        <input
          className="search"
          placeholder="Enter to search by sender..."
          onChange={ onSearch }
        />
      </div>
    </div>
  );
};

Filter.propTypes = {
  categories: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  filterBy: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
}

export default Filter;
