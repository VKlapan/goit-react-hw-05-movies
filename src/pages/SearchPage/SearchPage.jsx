import SearchForm from 'components/SearchForm/SearchForm';
import Movies from 'components/Movies/Movies';

const SearchPage = () => {
  return (
    <>
      <SearchForm />
      <Movies search={'cat'} />
    </>
  );
};

export default SearchPage;
