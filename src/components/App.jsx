import { Route, Routes } from 'react-router-dom';

import SharedLayout from 'pages/SharedLayout/SharedLayout';
import Movies from './Movies/Movies';
import SearchPage from 'pages/SearchPage/SearchPage';
import MoviePage from 'pages/MoviePage/MoviePage';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Movies query={null} />} />
        <Route path="/movies" element={<SearchPage />} />
        <Route path="/movies/:movieId" element={<MoviePage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
