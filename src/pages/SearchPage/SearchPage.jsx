import SearchForm from 'components/SearchForm/SearchForm';
import ListMovies from 'components/ListMovies/ListMovies';

const SearchPage = () => {
  return (
    <>
      <SearchForm />
      <ListMovies search={'SEARCH'} />
    </>
  );
};

export default SearchPage;
