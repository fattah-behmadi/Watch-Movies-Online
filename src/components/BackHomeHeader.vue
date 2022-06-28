<template>
  <div class="back-home-movie">
    <button class="btn-search" @click="clickBackHome">
      <mdicon name="KeyboardBackspace" size="16" />
      Back Home
    </button>
    <div class="header-content">
      <p class="movie-title">{{ title }}</p>
      <p class="movie-desc">{{ descriptin }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "descriptin"],
  methods: {
    clickBackHome() {
      this.$emit("clickBack");
    },
  },
};
</script>

<style lang="scss">
.back-home-movie {
  display: flex;
  align-items: center;
  margin-inline-start: 2.125rem;

  .btn-search {
    font-size: 1rem;
    background-color: var(--clr-blue-light);
    color: var(--clr-text-light);
    border-radius: 100px;
    padding: 8px 16px;
    width: fit-content;
    height: 33px;
    outline: none;
    border: none;
    cursor: pointer;
  }
  .header-content {
    margin-inline-start: 4rem;
    .movie-title {
      font-style: normal;
      font-weight: 700;
      font-size: 1.125rem;
    }
    .movie-desc {
      font-weight: 400;
      font-size: 1.125rem;
    }
  }
}
</style>
