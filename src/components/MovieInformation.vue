<template>
  <div class="information-movie">
    <div class="info-movie__top">
      <img
        :src="getUrlImgae(movie.poster_path)"
        alt="cover movie"
        class="movie-cover"
      />
      <ul class="info-movie__detail">
        <li class="item__detail">
          <span class="item-caption">Budget</span>
          <span class="item-info">{{ movie.budget }}</span>
        </li>
        <li class="item__detail">
          <span class="item-caption">Revenue</span>
          <span class="item-info">{{ movie.revenue }}</span>
        </li>
        <li class="item__detail">
          <span class="item-caption">Release Date</span>
          <span class="item-info">{{ movie.release_date }}</span>
        </li>
        <li class="item__detail">
          <span class="item-caption">Runtime</span>
          <span class="item-info">{{ movie.runtime }}</span>
        </li>
        <li class="item__detail">
          <span class="item-caption">Score</span>
          <span class="item-info">{{ score }}</span>
        </li>
        <li class="item__detail">
          <span class="item-caption">Genres</span>
          <span class="item-info">{{ genres }}</span>
        </li>
        <li class="item__detail">
          <span class="item-caption">IMDB Link</span>
          <a :href="movie.homepage" class="item-info">Link</a>
        </li>
        <li class="item__detail">
          <span class="item-caption">Homepage Link</span>
          <a :href="movie.homepage" class="item-info">Link</a>
        </li>
      </ul>
    </div>

    <div class="info-movie__bottom">
      <p class="movie-desc">{{ movie.overview }}</p>
      <div class="movie-credit">
        <p class="captin-credit">Credit:</p>
        <p class="movie-credit__item">{{ creditsFullName }}</p>
        <a class="show-credits">, more</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie", "credits"],
  data() {
    return {};
  },
  computed: {
    score() {
      return `${+this.movie?.vote_average?.toFixed(1)} (${
        this.movie?.vote_count
      } votes)`;
    },
    genres() {
      return this.movie?.genres?.reduce((title, genre) => {
        if (title.length > 0) title = `${title} ${genre.name},`;
        return title;
      }, "");
    },
    creditsFullName() {
      return this.credits
        ?.slice(0, 10)
        .reduce((title, credit) => {
          title.push(credit.name);
          return title;
        }, [])
        .join(", ");
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
.information-movie {
  margin-top: 4.875rem;

  .info-movie__top {
    display: flex;
    column-gap: 4.375rem;

    .movie-cover {
      width: 330px;
      height: 495px;
      border-radius: 12px;
    }
    .info-movie__detail {
      flex-grow: 1;
      margin-top: 24px;
      .item__detail {
        margin-block-end: 1.125rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .item-caption {
          font-weight: 700;
          font-size: 16px;
        }
        .item-info {
        }
      }
    }
  }

  .info-movie__bottom {
    margin-block-start: 3.25rem;

    .movie-desc {
      font-size: 1rem;
      line-height: 22px;
    }

    .movie-credit {
      margin-block-start: 5rem;

      .captin-credit {
        font-weight: 700;
        font-size: 1.125rem;
      }
      .movie-credit__item {
        margin-block-start: 0.75rem;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
