import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { getTrendedMovies, getMoviesBySearch } from 'servises/handlerApi';

const Movies = ({ search }) => {
  const apiFunction = useMemo(
    () => (!search ? getTrendedMovies : () => getMoviesBySearch(search)),
    [search]
  );

  const [movies, setMovies] = useState([]);

  const getResult = useCallback(async () => {
    const { results } = await apiFunction();
    setMovies(results);
  }, [apiFunction]);

  useEffect(() => getResult, [getResult]);

  return (
    <>
      <div>List Of Movies by {search}</div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
