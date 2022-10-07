import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleInput = event => {
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (input.trim() === '') return alert('no search query');
    onSubmit(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        value={input}
        onChange={handleInput}
      ></input>
      <button type="submit">search</button>
    </form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
