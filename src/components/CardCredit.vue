<template>
  <div class="w-40 h-60">
    <img
      :src="getUrlImgae(img)"
      alt="Credit"
      class="h-4/5 w-full object-cover"
    />
    <div class="h-1/5 text-gray-300 py-3">
      <p class="text-base">{{ fullName }}</p>
      <p class="text-xs text-gray-400">{{ character }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
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

<style></style>
