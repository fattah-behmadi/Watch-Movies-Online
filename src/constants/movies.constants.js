export const BASE_URL = "https://api.themoviedb.org/3";
export const nameSpaced = "movies";

export const routers = Object.freeze({
  MOVIES_LIST_PATH: "/movie-list",
  MOVIES_LIST_NAME: "movie-list",

  MOVIES_DETAIL_PATH: "/movie-detail/:id",
  MOVIES_DETAIL_NAME: "movie-detail",
});

export const action = Object.freeze({
  GET_LIST_MOVIES: "getListMovies",
  GET_GENRES_MOVIES: "getGenresMovies",
  GET_MOVIE_DETAILE: "getMovieDetaile",
  GET_CREDITS_MOVIE: "getCreditsMovie",
});

export const mutations = Object.freeze({
  SET_RESULT_MOVIES: "setResultMovies",
  SET_GENRES: "setGenres",
  SET_MOVIE_DETAIL: "setMovieDetail",
  SET_CREDITS_MOVIE: "setCreditsMovie",
});
