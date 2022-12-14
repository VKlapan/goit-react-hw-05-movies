import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '71cdb167e9140525707760b8d6412822',
  },
});
const media_type = 'movie';
const time_window = 'week';
export const apiSetup = {};

export const getMovies = query => {
  if (query === '') return;
  if (query === null) {
    return getTrendedMovies();
  } else {
    return getMoviesBySearch(query);
  }
};

export const getMovieReviews = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/reviews`);
  return data;
};

export const getMovieCredits = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/credits`);
  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}`);
  return data;
};

export const getTrendedMovies = async query => {
  const { data } = await instance.get(`/trending/${media_type}/${time_window}`);
  return data;
};

export const getMoviesBySearch = async query => {
  try {
    const { data } = await instance.get('/search/movie', {
      params: {
        query,
      },
    });
    return data;
  } catch (error) {
    alert(error);
  }
};

export const getApiConfig = async () => {
  const { data } = await instance.get(`/configuration`);
  apiSetup.images = data.images;
};

(function init() {
  getApiConfig();
  //  console.log('init API : ', apiSetup);
})();
