<template>
  <div class="home-container">
    <search-header />
    <movies-list
      :movies="listOfMovies_state"
      :genresMovies="genresMovies_state"
    />
  </div>
</template>

<script>
import SearchHeader from "@/components/SearchHeader.vue";
import moviesList from "@/views/movies-list/movies-list.vue";

import { mapActions, mapState } from "vuex";
import { nameSpaced, action } from "@/constants/movies.constants";

export default {
  name: "layout-home",
  components: {
    SearchHeader,
    moviesList,
  },
  computed: {
    ...mapState(nameSpaced, {
      listOfMovies_state: "listOfMovies",
      genresMovies_state: "genresMovies",
    }),
  },
  async mounted() {
    await this.getGenresMovies_Action();
    await this.getListMovies_Action();
  },
  methods: {
    ...mapActions(nameSpaced, {
      getListMovies_Action: action.GET_LIST_MOVIES,
      getGenresMovies_Action: action.GET_GENRES_MOVIES,
    }),
  },
};
</script>

<style></style>
