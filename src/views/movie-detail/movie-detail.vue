<template>
  <div>
    {{ currentMovie_state.original_title }}
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { nameSpaced, action } from "@/constants/movies.constants";

export default {
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
