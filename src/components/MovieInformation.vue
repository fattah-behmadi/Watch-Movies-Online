<template>
  <div class="mt-16">
    <div class="flex gap-16">
      <img
        :src="getUrlImgae(movie.poster_path)"
        alt="cover movie"
        class="w-80 h-[496px] rounded-2xl"
      />
      <ul class="info-movie__detail flex-grow mt-6">
        <li class="text-gray-100 flex items-center justify-between mb-5">
          <span class="text-base font-bold">Budget</span>
          <span class="item-info">{{ movie.budget }}</span>
        </li>
        <li class="text-gray-100 flex items-center justify-between mb-5">
          <span class="text-base font-bold">Revenue</span>
          <span class="item-info">{{ movie.revenue }}</span>
        </li>
        <li class="text-gray-100 flex items-center justify-between mb-5">
          <span class="text-base font-bold">Release Date</span>
          <span class="item-info">{{ movie.release_date }}</span>
        </li>
        <li class="text-gray-100 flex items-center justify-between mb-5">
          <span class="text-base font-bold">Runtime</span>
          <span class="item-info">{{ movie.runtime }}</span>
        </li>
        <li class="text-gray-100 flex items-center justify-between mb-5">
          <span class="text-base font-bold">Score</span>
          <span class="item-info">{{ score }}</span>
        </li>
        <li class="text-gray-100 flex items-center justify-between mb-5">
          <span class="text-base font-bold">Genres</span>
          <span class="item-info">{{ genres }}</span>
        </li>
        <li class="text-gray-100 flex items-center justify-between mb-5">
          <span class="text-base font-bold">IMDB Link</span>
          <a :href="movie.homepage" class="text-sky-500">Link</a>
        </li>
        <li class="text-gray-100 flex items-center justify-between mb-5">
          <span class="text-base font-bold">Homepage Link</span>
          <a :href="movie.homepage" class="text-sky-500">Link</a>
        </li>
      </ul>
    </div>

    <div class="mt-12">
      <!-- movie overview -->
      <p class="movie-desc text-base leading-6 text-gray-200">
        {{ movie.overview }}
      </p>

      <div class="mt-20">
        <p class="font-bold text-lg text-gray-100 mb-3">CREDIT :</p>
        <span class="text-gray-50">{{ creditsFullName }}</span>
        <sapn class="text-gray-50"> more ...</sapn>
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

<style lang="scss"></style>
