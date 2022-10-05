import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();

  return <div>Cast of movie id = {movieId}</div>;
};

export default Cast;
