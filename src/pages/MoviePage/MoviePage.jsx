import SearchForm from 'components/SearchForm/SearchForm';
import Movies from 'components/Movies/Movies';
import { useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from 'servises/handlerApi';

const MoviePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const onSubmit = query => {
    setSearchParams(query === '' || query === null ? {} : { query: query });
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {query !== '' && (
        <Movies getMoviesFromApi={getMoviesBySearch} query={query} />
      )}
    </>
  );
};

export default MoviePage;
