<template>
  <div class="ml-20 flex items-center">
    <div class="flex items-center">
      <span class="mr-7 font-normal text-base text-slate-200"
        >Search by release date:</span
      >
      <date-picker
        v-model="date"
        @update:modelValue="handleDate"
        :format="'yyyy-MM-dd'"
        range
        multiCalendars
        class="rounded h-auto w-80"
      />
    </div>
    <button
      class="text-base bg-yellow-500 text-slate-700 h-8 w-36 px-4 py-5 grid place-content-center rounded-full ml-auto mr-16 transition duration-300 hover:shadow-sm hover:shadow-yellow-300/50"
      @click="searchClick"
    >
      Search
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: null,
      filterDate: null,
    };
  },
  methods: {
    handleDate(dateTime) {
      let { 0: from, 1: to } = { ...dateTime };
      this.filterDate = { from, to };
    },
    searchClick() {
      if (!this.filterDate) return;
      this.$emit("search", this.filterDate);
    },
  },
};
</script>

<style lang="scss"></style>
