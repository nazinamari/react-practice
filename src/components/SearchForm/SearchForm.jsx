import { useState } from 'react';

export const SearchForm = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = evt => {
    evt.preventDefault();
    setInputValue(evt.target.value);

    onSearch(inputValue);
    // evt.target.reset();
  };

  return (
    <form>
      <input
        type="text"
        name="planet"
        placeholder="Search planets..."
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};
