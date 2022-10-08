import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'pages/SharedLayout/SharedLayout';
import Movies from './Movies/Movies';
import MoviePage from 'pages/MoviePage/MoviePage';
import MovieDetails from './MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import HomePage from 'pages/HomePage/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Movies query={null} />} />
      </Route>
    </Routes>
  );
};
