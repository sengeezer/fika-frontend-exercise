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

const getMovies = () => {
  axios(movieList)
    .then((response) => {
      const {results} = response.data;

      return JSON.stringify(results);
    })
    .catch((error) => {
      return new Error(error);
    });
};

const getGenres = () => {
  axios(genreList)
    .then(function (response) {
      return JSON.stringify(response.data);
    })
    .catch(function (error) {
      return new Error(error);
    });
};

export {getMovies, getGenres};
