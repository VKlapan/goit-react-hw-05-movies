import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleInput = event => {
    console.log(event.target.value);
    setInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(input);
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
