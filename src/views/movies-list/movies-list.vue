<template>
  <div class="movies-container">
    <the-header>
      <search-header @search="searchClick" />
    </the-header>
    <div class="movie-list">
      <card-movie
        v-for="movie in listOfMovies_state"
        :key="movie.id"
        :title="movie.original_title"
        :releaseDate="movie.release_date"
        :img="movie.poster_path"
        :genres="getTitleGenres(movie.genre_ids)"
        @click="clickCard(movie)"
      />
    </div>
    <the-pagination
      @selectPage="clickPage"
      :pageCount="500"
      :page="currentPage"
    />
  </div>
</template>

<script>
import CardMovie from "@/components/CardMovie.vue";
import { routers as routersMovie } from "@/constants/movies.constants";
import TheHeader from "@/components/TheHeader.vue";
import SearchHeader from "@/components/SearchHeader.vue";
import ThePagination from "@/components/ThePagination.vue";

import { mapActions, mapState } from "vuex";
import { nameSpaced, action } from "@/constants/movies.constants";

export default {
  components: {
    CardMovie,
    SearchHeader,
    ThePagination,
    TheHeader,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    ...mapState(nameSpaced, {
      listOfMovies_state: "listOfMovies",
      genresMovies_state: "genresMovies",
      // totalPages_state: "totalPages",// total page count : maximum page number in api is 500
    }),
  },
  async mounted() {
    this.currentPage = +this.$route.query.page || 1;
    await this.getGenresMovies_Action();
    await this.getListMovies_Action({ page: this.currentPage });
  },
  methods: {
    ...mapActions(nameSpaced, {
      getListMovies_Action: action.GET_LIST_MOVIES,
      getGenresMovies_Action: action.GET_GENRES_MOVIES,
    }),
    clickPage(page) {
      this.currentPage = page;
      this.getListMovies_Action({ page });
    },
    searchClick(date) {
      this.getListMovies_Action({
        "primary_release_date.gte": date.from.toISOString().slice(0, 10),
        "primary_release_date.lte": date.to.toISOString().slice(0, 10),
      });
    },
    getTitleGenres(arrIDGenres) {
      return this.genresMovies_state
        ?.reduce((titles, genre) => {
          if (arrIDGenres?.includes(genre.id)) titles.push(genre.name);
          return titles;
        }, [])
        ?.slice(0, 3);
    },
    clickCard(movie) {
      this.$router.push({
        name: routersMovie.MOVIES_DETAIL_NAME,
        params: { id: movie.id },
        query: { page: this.currentPage },
      });
    },
  },
};
</script>

<style lang="scss">
.movie-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 68px;
  row-gap: 38px;
  margin-top: 7.5rem;
}
</style>
