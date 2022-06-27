<template>
  <div class="movie-card">
    <div class="movie-card__img">
      <img :src="getUrlImgae(img)" alt="poster" class="movie-img" />
    </div>
    <div class="movie-card__content">
      <span class="movie-title">{{ title }} </span>
      <span class="movie-release_date">{{ releaseDate }}</span>
      <span class="movie-genres">
        <span class="genre" v-for="genre in genres" :key="genre">{{
          genre
        }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
      required: true,
    },
    releaseDate: {
      type: String,
      default: null,
    },
    genres: {
      type: Array,
      default: null,
    },
  },

  methods: {
    getUrlImgae(path) {
      if (!path) return;
      return `https://image.tmdb.org/t/p/w500${path}`;
    },
  },
};
</script>

<style lang="scss">
.movie-card {
  width: 18.4375rem;
  height: 12.1875rem;
  display: flex;
  background: var(--clr-grey-100);
  border: 1px solid var(--clr-grey-300);
  border-radius: 6px;
  overflow: hidden;
  padding: 0.25rem;
  cursor: pointer;

  .movie-card__img {
    min-width: 8rem;
    height: 11.75rem;
    border-radius: 6px 0px 0px 6px;
    overflow: hidden;
    .movie-img {
      width: 100%;
      height: 100%;
    }
  }
  .movie-card__content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem 10px 12px 10px;

    .movie-title {
      font-weight: 700;
      font-size: 1rem;
    }
    .movie-release_date {
      font-weight: 400;
      font-size: 0.75rem;
      margin-block-start: auto;
      margin-block-end: 0.875rem;
    }
    .movie-genres {
      font-weight: 400;
      font-size: 0.75rem;
      display: flex;
      flex-wrap: wrap;
      column-gap: 0.875rem;
      overflow: hidden;

      .genre {
        position: relative;

        &::after {
          content: "";
          display: block;
          width: 4px;
          height: 4px;
          background-color: black;
          border-radius: 50%;
          position: absolute;
          right: -8px;
          top: 50%;
        }

        &:last-child::after {
          content: none;
        }
      }
    }
  }
}
</style>
