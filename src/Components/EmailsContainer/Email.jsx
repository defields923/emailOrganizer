import React from 'react';
import PropTypes from 'prop-types';
import Categories from '../Categories';

const Email = ({ entry, stringToColor, categories, onChange, onCheck, index, style }) => {
  return (
    <div style={ style }>
      <div className="flex-container">
        <div className="flex-item organize" style={{"backgroundColor":"#f4f2f2"}}>
          <input type="checkbox" checked={ Boolean(entry.organize) } onClick={ (e) => onCheck(index) } readOnly/>
        </div>
        <div className="flex-item entrydetails">{ String(entry.sender) }</div>
        <div className="flex-item entrydetails">{ String(entry.domain) }</div>
        <div className="flex-item entrydetails">{ String(entry.email) }</div>
        <div className="flex-item">
          <Categories
            entry={entry}
            categories={ categories }
            selected={ entry.folder }
            onChange={ onChange }
            index={ index }
            sortcss={{
              "float":"left",
              "margin":"auto"
            }}
          />
          <div className="colorlabel" style={{"backgroundColor":`${stringToColor(entry.folder)}`}}></div>
        </div>
      </div>
    </div>
  );
};

Email.propTypes = {
  entry: PropTypes.object.isRequired,
  stringToColor: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  style: PropTypes.object
};

export default Email;
