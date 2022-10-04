import SearchForm from 'components/SearchForm/SearchForm';
import Movies from 'components/Movies/Movies';

const SearchPage = () => {
  const query = 'cat';
  return (
    <>
      <SearchForm />
      <Movies query={query} />
    </>
  );
};

export default SearchPage;
