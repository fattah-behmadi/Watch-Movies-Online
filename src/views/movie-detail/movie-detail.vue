<template>
  <div class="detail-movie-container">
    <the-header>
      <back-home-header
        :title="currentMovie_state.original_title"
        :descriptin="currentMovie_state.tagline"
      />
    </the-header>
    <detail-movie :movie="currentMovie_state" :credits="''" />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import BackHomeHeader from "@/components/BackHomeHeader.vue";
import DetailMovie from "@/components/DetailMovie.vue";
import { mapActions, mapState } from "vuex";
import { nameSpaced, action } from "@/constants/movies.constants";

export default {
  components: {
    TheHeader,
    BackHomeHeader,
    DetailMovie,
  },
  computed: {
    ...mapState(nameSpaced, {
      currentMovie_state: "currentMovie",
    }),
  },
  mounted() {
    this.getMovieDetaile_Action(this.$route.params?.id);
  },
  methods: {
    ...mapActions(nameSpaced, {
      getMovieDetaile_Action: action.GET_MOVIE_DETAILE,
    }),
  },
};
</script>

<style lang="scss">
.detail-movie-container {
}
</style>
