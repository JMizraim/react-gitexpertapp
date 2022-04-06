 import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState("");
  
//   const [inputValue, setInputValue] = useState(); si se deja así es undefinied por consecuencia value es undefinied

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue) {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue("");
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        placeholder="Write here"
        onChange={handleChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}
