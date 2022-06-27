import services from "@/services/movies.services";
import {
  action as actionMovies,
  mutations as mutationsConstant,
} from "@/constants/movies.constants";

const actions = {
  [actionMovies.GET_LIST_MOVIES]({ commit }, queryParams) {
    services[actionMovies.GET_LIST_MOVIES](queryParams).then((Response) => {
      commit(mutationsConstant.SET_RESULT_MOVIES, Response.data);
    });
  },
  [actionMovies.GET_GENRES_MOVIES]({ commit }) {
    services[actionMovies.GET_GENRES_MOVIES]().then((Response) => {
      commit(mutationsConstant.SET_GENRES, Response.data);
    });
  },
};

export default actions;
