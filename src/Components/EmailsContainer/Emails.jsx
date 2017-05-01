import React from 'react';
import PropTypes from 'prop-types';
import Email from './Email.jsx';

const Emails = ({ data, stringToColor, categories, onChange, onCheck, selected }) => {
  return (
    <div className="emails">
      <div className="flex-container">
        <div className="flex-item organize">Organize</div>
        <div className="flex-item labels">Sender</div>
        <div className="flex-item labels">Domain</div>
        <div className="flex-item labels">Email</div>
        <div className="flex-item labels">Folder</div>
      </div>
      {
        data.map((entry, i) => {
        // eslint-disable-next-line
          return selected === "Inbox" || entry.organize === true && entry.folder === selected ?
          <Email
            entry={ entry }
            stringToColor={ stringToColor }
            categories={ categories }
            onChange={ onChange }
            onCheck={ onCheck }
            index={ i }
            key={ i }
          />
          :
          <Email
            style={ {"opacity":"0.1"} }
            entry={ entry }
            stringToColor={ stringToColor }
            categories={ categories }
            onChange={ onChange }
            onCheck={ onCheck }
            index={ i }
            key={ i }
          />
        })
      }
    </div>
  );
}

Emails.propTypes = {
  data: PropTypes.array.isRequired,
  stringToColor: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
};

export default Emails;
