import axios from "axios";
import { GetPageSizeFromList } from "@/utility/globalFunction.js";
import { BASE_URL } from "@/constants/movies.constants";
const api_key = "api_key=f62f750b70a8ef11dad44670cfb6aa57";

function getListMovies(query) {
  return axios({
    method: "GET",
    url: `${BASE_URL}/discover/movie?${api_key}${GetPageSizeFromList(query)}`,
  });
}
function getGenresMovies() {
  return axios({
    method: "GET",
    url: `${BASE_URL}/genre/movie/list?${api_key}`,
  });
}

function getMovieDetaile(movie_id) {
  return axios({
    method: "GET",
    url: `${BASE_URL}/movie/${movie_id}?${api_key}`,
  });
}

function getCreditsMovie(movie_id) {
  return axios({
    method: "GET",
    url: `${BASE_URL}/movie/${movie_id}/credits?${api_key}`,
  });
}

export default {
  getListMovies,
  getGenresMovies,
  getMovieDetaile,
  getCreditsMovie,
};
