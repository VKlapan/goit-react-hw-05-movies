import { DetailsLink, DetailsMenu } from './MovieDetailsNavigation.styled';

const MovieDetailsNavigation = () => {
  return (
    <>
      <h3>Additional Information</h3>
      <DetailsMenu>
        <DetailsLink to="cast">Cast</DetailsLink>
        <DetailsLink to="reviews">Reviews</DetailsLink>
      </DetailsMenu>
    </>
  );
};

export default MovieDetailsNavigation;
