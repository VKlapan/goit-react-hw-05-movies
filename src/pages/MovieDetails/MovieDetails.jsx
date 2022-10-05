import { useState, useEffect, useContext } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import MovieDetailsNavigation from 'components/MovieDetailsNavigation/MovieDetailsNavigation';
import { getMovieDetails } from 'servises/handlerApi';
import ctx from '../../contexts/setupContext';
import { MovieCard, MoviePoster } from './MovieDetails.styled';

const MovieDetails = () => {
  const { images } = useContext(ctx);
  //  console.log('context', images);

  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState();

  const getGenreNames = genres => genres.map(genre => genre.name).join(',');

  useEffect(() => {
    const getDataMovie = async id => {
      const details = await getMovieDetails(id);
      setMovieDetails(details);
    };
    getDataMovie(movieId);
  }, [movieId]);

  if (!movieDetails || images === undefined) return;
  const { secure_base_url, poster_sizes } = images;
  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  return (
    <>
      <div>Movie Page</div>
      <p>id = {movieId}</p>
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
