import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovies } from 'servises/handlerApi';
import PropTypes from 'prop-types';

const Movies = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getListMovies = async () => {
      const { results } = await getMovies(query);
      setMovies(results);
    };
    getListMovies();
  }, [query]);

  return (
    <>
      {!query && <h2>Trending today</h2>}
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;

Movies.propTypes = {
  query: PropTypes.string,
};
