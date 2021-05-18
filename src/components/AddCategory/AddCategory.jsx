import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('');

  const hadnleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
      e.preventDefault(); //Esto previene que el navegador se recargue
      if (inputValue.trim().length>2) {
        setCategories(cats=>[inputValue,...cats]);    
        setInputValue('');
      }
      
      
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for gifs"
        value={inputValue}
        onChange={hadnleInputChange}
      />
    </form>
  );
};

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
