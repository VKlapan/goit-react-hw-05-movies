import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '71cdb167e9140525707760b8d6412822',
  },
});
const media_type = 'movie';
const time_window = 'week';

export const getTrendedMovies = async () => {
  const { data } = await instance.get(`/trending/${media_type}/${time_window}`);
  console.log('trend', data);
  return data;
};

export const getMoviesBySearch = async query => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query,
    },
  });
  console.log('search', data);
  return data;
};
