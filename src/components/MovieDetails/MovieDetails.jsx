import { useState, useEffect, useContext, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import MovieDetailsNavigation from 'components/MovieDetailsNavigation/MovieDetailsNavigation';
import { getMovieDetails } from 'servises/handlerApi';
import ctx from '../../contexts/setupContext';
import MovieItem from 'components/MovieItem/MovieItem';

const MovieDetails = () => {
  const { images } = useContext(ctx);

  const location = useLocation();

  const locationRef = useRef(
    location.state?.from?.pathname + location.state?.from?.search
  );

  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);

  if (!movieDetails || images === undefined) return;

  return (
    <>
      <Link to={locationRef.current ? locationRef.current : '/movies'}>
        <p>GO BACK</p>
      </Link>
      <MovieItem images={images} movieDetails={movieDetails} />
      <MovieDetailsNavigation />
      <Outlet />
    </>
  );
};

export default MovieDetails;
