import { MovieCard, MoviePoster } from './MovieItem.styled';
import PropTypes from 'prop-types';
import noposter_url from '../../images/noposter.png';

const MovieItem = ({ images, movieDetails }) => {
  const { secure_base_url, poster_sizes } = images;
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;

  const release_year = release_date.slice(0, 4);
  const user_score = Math.ceil(vote_average * 10);

  const getGenreNames = genres => genres.map(genre => genre.name).join(', ');

  return (
    <MovieCard>
      <MoviePoster>
        <img
          src={
            poster_path
              ? secure_base_url + poster_sizes[2] + poster_path
              : noposter_url
          }
          alt={title}
        />
      </MoviePoster>
      <div>
        <h3>
          {title} ({release_year})
        </h3>
        <p>User score: {user_score} %</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{getGenreNames(genres)}</p>
      </div>
    </MovieCard>
  );
};

export default MovieItem;
MovieItem.propTypes = {
  images: PropTypes.shape({
    secure_base_url: PropTypes.string,
    poster_sizes: PropTypes.array,
  }),
  movieDetails: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
  }),
};
