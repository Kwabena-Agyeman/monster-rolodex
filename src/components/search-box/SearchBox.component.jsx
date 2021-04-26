import React from 'react';
import './search-box.styles.css';

const SearchBox = (props) => {
  const { placeholder, handleChange, searchField } = props;
  return (
    <div>
      <input
        className='search'
        type='search'
        value={searchField}
        placeholder={placeholder}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
};

export default SearchBox;
