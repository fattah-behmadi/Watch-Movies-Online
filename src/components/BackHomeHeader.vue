<template>
  <div class="flex items-center ml-10">
    <button
      class="flex items-center text-base bg-purple-900 text-white h-8 w-44 px-4 py-5 place-content-center rounded-full mr-auto mr-16 transition duration-300 hover:shadow-sm hover:shadow-purple-700/50"
      @click="clickBackHome"
    >
      <mdicon name="KeyboardBackspace" size="24" class="mx-2" />
      Back Home
    </button>
    <div class="ml-16">
      <p class="text-xl font-bold text-amber-500">{{ title }}</p>
      <p class="text-amber-50 text-xm">{{ descriptin }}</p>
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

<style lang="scss"></style>
