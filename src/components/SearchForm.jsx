import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query) {
      onSearch(query.toLowerCase());
      setQuery('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar Pokémon"
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchForm;
