import SearchForm from 'components/SearchForm/SearchForm';
import Movies from 'components/Movies/Movies';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const onSubmit = query => {
    setSearchParams(query === '' || query === null ? {} : { query: query });
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {query !== '' && <Movies query={query} />}
    </>
  );
};

export default SearchPage;
