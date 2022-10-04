import { Link } from 'react-router-dom';

const MovieDetailsNavigation = () => {
  return (
    <div>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
    </div>
  );
};

export default MovieDetailsNavigation;
