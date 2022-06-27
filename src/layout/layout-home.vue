<template>
  <div class="home-container">
    <search-header />
    <movies-list
      :movies="listOfMovies_state"
      :genresMovies="genresMovies_state"
    />
    <the-pagination @selectPage="clickPage" :pageCount="totalPages_state" />
  </div>
</template>

<script>
import SearchHeader from "@/components/SearchHeader.vue";
import moviesList from "@/views/movies-list/movies-list.vue";
import ThePagination from "@/components/ThePagination.vue";

import { mapActions, mapState } from "vuex";
import { nameSpaced, action } from "@/constants/movies.constants";

export default {
  name: "layout-home",
  components: {
    SearchHeader,
    moviesList,
    ThePagination,
  },
  computed: {
    ...mapState(nameSpaced, {
      listOfMovies_state: "listOfMovies",
      genresMovies_state: "genresMovies",
      totalPages_state: "totalPages",
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
    clickPage(page) {
      this.getListMovies_Action({ page });
    },
  },
};
</script>

<style></style>
