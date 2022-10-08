import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'servises/handlerApi';
import ctx from '../../contexts/setupContext';
import { CastGrid } from './Cast.styled';
import noimage_url from '../../images/noimage.png';

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
    <CastGrid>
      {cast.map(item => (
        <li key={item.cast_id}>
          <img
            src={
              item.profile_path
                ? secure_base_url + poster_sizes[1] + item.profile_path
                : noimage_url
            }
            alt={item.name}
          />
          <p>Name: {item.name}</p>
          <p>Character: {item.character}</p>
        </li>
      ))}
    </CastGrid>
  );
};

export default Cast;
