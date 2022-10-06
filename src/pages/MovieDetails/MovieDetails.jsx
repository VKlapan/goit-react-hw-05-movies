import { useState, useEffect, useContext, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import MovieDetailsNavigation from 'components/MovieDetailsNavigation/MovieDetailsNavigation';
import { getMovieDetails } from 'servises/handlerApi';
import ctx from '../../contexts/setupContext';
import { MovieCard, MoviePoster } from './MovieDetails.styled';

const MovieDetails = () => {
  const { images } = useContext(ctx);

  const location = useLocation();

  const locationRef = useRef(
    location.state?.from?.pathname + location.state?.from?.search
  );

  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState();

  const getGenreNames = genres => genres.map(genre => genre.name).join(',');

  useEffect(() => {
    getMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);

  if (!movieDetails || images === undefined) return;
  const { secure_base_url, poster_sizes } = images;
  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  return (
    <>
      <Link to={locationRef.current}>
        <p>GO BACK</p>
      </Link>
      <div>Movie Page</div>
      <MovieCard>
        <MoviePoster>
          <img
            src={secure_base_url + poster_sizes[2] + poster_path}
            alt={title}
          />
        </MoviePoster>
        <div>
          <p>title = {title}</p>
          <p>vote = {vote_average}</p>
          <p>overview = {overview}</p>
          <p>genres = {getGenreNames(genres)}</p>
        </div>
      </MovieCard>

      <MovieDetailsNavigation />
      <Outlet />
    </>
  );
};

export default MovieDetails;
