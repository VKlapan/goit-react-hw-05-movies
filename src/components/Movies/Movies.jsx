import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovies } from 'servises/handlerApi';

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
      <div>List Of Movies by {query}</div>
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
