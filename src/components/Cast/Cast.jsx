import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'servises/handlerApi';
import ctx from '../../contexts/setupContext';

const Cast = () => {
  const { images } = useContext(ctx);

  const { movieId } = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    const getCast = async id => {
      const { cast } = await getMovieCredits(id);
      setCast(cast);
    };
    getCast(movieId);
  }, [movieId]);

  if (!cast || images === undefined) return;
  const { secure_base_url, poster_sizes } = images;

  return (
    <ul>
      {cast.map(item => (
        <li key={item.cast_id}>
          <img
            src={secure_base_url + poster_sizes[1] + item.profile_path}
            alt={item.name}
          />
          <p>Name: {item.name}</p>
          <p>Character: {item.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
