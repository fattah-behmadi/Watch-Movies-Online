import { mutations as mutationsConstant } from "@/constants/movies.constants";

const mutations = {
  [mutationsConstant.SET_RESULT_MOVIES](state, data) {
    state.listOfMovies = data?.results || [];
    state.currentPage = data?.page || 0;
    state.totalPages = data?.total_pages || 0;
    state.totalMovies = data?.total_results || 0;
  },
  [mutationsConstant.SET_GENRES](state, data) {
    state.genresMovies = data?.genres || [];
  },
  [mutationsConstant.SET_MOVIE_DETAIL](state, movie) {
    state.currentMovie = movie || {};
  },
  [mutationsConstant.SET_CREDITS_MOVIE](state, credits) {
    state.creditsMovie = credits?.cast || [];
  },
};

export default mutations;
