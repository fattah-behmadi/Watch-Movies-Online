<template>
  <div>
    <the-header>
      <back-home-header
        :title="currentMovie_state.original_title"
        :descriptin="currentMovie_state.tagline"
      />
    </the-header>
    {{}}
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import BackHomeHeader from "@/components/BackHomeHeader.vue";
import { mapActions, mapState } from "vuex";
import { nameSpaced, action } from "@/constants/movies.constants";

export default {
  components: {
    TheHeader,
    BackHomeHeader,
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

<style></style>
