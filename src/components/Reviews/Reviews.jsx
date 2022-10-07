import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'servises/handlerApi';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    const getReviews = async id => {
      const { results } = await getMovieReviews(id);
      setReviews(results);
    };
    getReviews(movieId);
  }, [movieId]);

  if (!reviews) return;

  return (
    <>
      {reviews.length === 0 ? (
        <p> There's no review yet :-(</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
