import SearchForm from 'components/SearchForm/SearchForm';
import Movies from 'components/Movies/Movies';
import { useState } from 'react';

const SearchPage = () => {
  const [query, setQuery] = useState('');

  const onSubmit = query => {
    setQuery(query);
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {query !== '' && <Movies query={query} />}
    </>
  );
};

export default SearchPage;
