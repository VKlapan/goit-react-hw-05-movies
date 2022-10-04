import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from 'servises/handlerApi';

const Movies = ({ query }) => {
  const [movies, setMovies] = useState([]);
  console.log('query in Movies', query);

  useEffect(() => {
    const getListMovies = async () => {
      console.log('first render movies');
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
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
