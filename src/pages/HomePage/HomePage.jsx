import Movies from 'components/Movies/Movies';
import { getTrendedMovies } from 'servises/handlerApi';

const HomePage = () => {
  return (
    <>
      <Movies getMoviesFromApi={getTrendedMovies} query={null} />
    </>
  );
};

export default HomePage;
