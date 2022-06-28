<template>
  <div class="detail-movie-container">
    <the-header>
      <back-home-header
        :title="currentMovie_state.original_title"
        :descriptin="currentMovie_state.tagline"
        @clickBack="backToListMovies"
      />
    </the-header>
    <movie-information
      :movie="currentMovie_state"
      :credits="creditsMovie_state"
    />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import BackHomeHeader from "@/components/BackHomeHeader.vue";
import MovieInformation from "@/components/MovieInformation.vue";
import { mapActions, mapState } from "vuex";
import { nameSpaced, action } from "@/constants/movies.constants";
import { routers as routersMovie } from "@/constants/movies.constants";

export default {
  components: {
    TheHeader,
    BackHomeHeader,
    MovieInformation,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    ...mapState(nameSpaced, {
      currentMovie_state: "currentMovie",
      creditsMovie_state: "creditsMovie",
    }),
  },
  mounted() {
    this.currentPage = +this.$route.query.page || 1;
    this.getMovieDetaile_Action(this.$route.params?.id);
    this.getCreditsMovie_Action(this.$route.params?.id);
  },
  methods: {
    ...mapActions(nameSpaced, {
      getMovieDetaile_Action: action.GET_MOVIE_DETAILE,
      getCreditsMovie_Action: action.GET_CREDITS_MOVIE,
    }),
    backToListMovies() {
      this.$router.push({
        name: routersMovie.MOVIES_LIST_NAME,
        query: { page: this.currentPage },
      });
    },
  },
};
</script>

<style lang="scss">
.detail-movie-container {
}
</style>
