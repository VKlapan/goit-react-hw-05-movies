import { MovieCard, MoviePoster } from './MovieItem.styled';

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
          src={secure_base_url + poster_sizes[2] + poster_path}
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
