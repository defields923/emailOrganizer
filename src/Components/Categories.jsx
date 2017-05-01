import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({ categories, selected, onChange, index, sortcss }) => {
  return (
    <form className="flex-item" style={ sortcss } onChange={ (e) => onChange(e, index) }>
      <select value={ selected } name="category" readOnly>
        {
          !index &&
          <option value="Inbox">Inbox</option>
        }
        {
          categories.map((cat, i) =>
            <option value={ String(cat) } key={ i }>{ String(cat) }</option>
          )
        }
      </select>
    </form>
  );
};

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  index: PropTypes.number,
  sortcss: PropTypes.object
};

export default Categories;
