<template>
  <div class="movie-list">
    <card-movie
      v-for="movie in movies"
      :key="movie.id"
      :title="movie.original_title"
      :releaseDate="movie.release_date"
      :img="movie.poster_path"
      :genres="getTitleGenres(movie.genre_ids)"
    />
  </div>
</template>

<script>
import CardMovie from "@/components/CardMovie.vue";

export default {
  components: {
    CardMovie,
  },
  props: {
    movies: {
      type: Array,
      default: null,
      required: true,
    },
    genresMovies: {
      type: Array,
      default: null,
      required: true,
    },
  },
  methods: {
    getTitleGenres(arrIDGenres) {
      return this.genresMovies?.reduce((titles, genre) => {
        if (arrIDGenres?.includes(genre.id)) titles.push(genre.name);
        return titles;
      }, []);
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
