import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from 'servises/handlerApi';

const Movies = ({ query }) => {
  const [movies, setMovies] = useState([]);

  const getResult = useCallback(async () => {
    const { results } = await getMovies(query);
    setMovies(results);
  }, [query]);

  useEffect(() => getResult, [getResult]);

  return (
    <>
      <div>List Of Movies by {query}</div>
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
