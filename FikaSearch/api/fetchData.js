const axios = require('axios');

const genreList = {
  method: 'get',
  url:
    'https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US',
  headers: {},
};

const movieList = {
  method: 'get',
  url:
    'https://api.themoviedb.org/3/movie/now_playing?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1',
  headers: {},
};

const getMovies = async () => {
  let data;

  await axios(movieList)
    .then((response) => {
      const {results} = response.data;

      data = results;
    })
    .catch((error) => {
      data = new Error(error);
    });

  return data;
};

const getGenres = async () => {
  let data;

  await axios(genreList)
    .then((response) => {
      const {genres} = response.data;

      data = genres;
    })
    .catch((error) => {
      data = new Error(error);
    });

  return data;
};

export {getMovies, getGenres};
