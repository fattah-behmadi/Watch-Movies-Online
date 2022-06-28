<template>
  <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
    <div
      class="movie-card flex rounded-md w-[296px] h-[196px] drop-shadow-xl overflow-hidden p-1 cursor-pointer bg-gradient-to-r from-slate-900 to-slate-800"
    >
      <!-- poster movie -->
      <div class="w-32 min-w-[128px] h-full rounded-l-md overflow-hidden">
        <img :src="getUrlImgae(img)" alt="poster" class="w-full h-full" />
      </div>

      <!-- content right -->
      <div class="flex-grow flex-col flex justify-between px-2.5 pb-3 pt-4">
        <span class="font-bold text-white text-lg">{{ title }} </span>

        <span
          class="flex items-center gap-x-1.5 font-normal text-xs mt-auto text-slate-400"
        >
          <mdicon name="CalendarBlank" size="16" />
          <span class="date_caption"> {{ releaseDate }}</span>
        </span>

        <span
          class="flex flex-wrap font-normal gap-x-3.5 text-xs overflow-hidden text-slate-400 mt-2.5"
        >
          <span class="genre relative" v-for="genre in genres" :key="genre">{{
            genre
          }}</span>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
import gsap from "gsap";
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
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = "scale(0,0)";
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 0.5,
        opacity: 1,
        scale: 1,
        onComplete: done,
      });
    },
  },
};
</script>

<style lang="scss"></style>
