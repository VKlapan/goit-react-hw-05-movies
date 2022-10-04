import { Outlet, useParams } from 'react-router-dom';
import MovieDetailsNavigation from 'components/MovieDetailsNavigation/MovieDetailsNavigation';

const MoviePage = () => {
  const { movieId } = useParams();

  return (
    <>
      <div>Movie Page</div>
      <p>id = {movieId}</p>
      <MovieDetailsNavigation />
      <Outlet />
    </>
  );
};

export default MoviePage;
