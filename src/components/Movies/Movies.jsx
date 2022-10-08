import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movies = ({ getMoviesFromApi, query }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getListMovies = async () => {
      try {
        const { results } = await getMoviesFromApi(query);
        setMovies(results);
      } catch (error) {
        alert(error);
      }
    };

    getListMovies();
  }, [getMoviesFromApi, query]);

  return (
    <>
      {!query && <h2>Trending today</h2>}
      {movies.length === 0 ? (
        <p>Sorry, there is no movie with {query} :(((</p>
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Movies;

Movies.propTypes = {
  query: PropTypes.string,
};
