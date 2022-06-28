<template>
  <div class="w-fit m-auto mt-40">
    <pagination-list
      :v-model="page"
      :page-count="pageCount"
      :page-range="pageRange"
      :margin-pages="marginPages"
      :click-handler="clickCallback"
      :prev-text="'Previous Page'"
      :next-text="'Next Page'"
      :container-class="'flex items-center list-none  text-slate-100 cursor-pointer '"
      :page-class="'grid select-all transition-all duration-200 ease-in-out'"
      :active-class="'text-blue-500 '"
      :page-link-class="'py-2.5 px-4 select-none'"
    />
  </div>
</template>

<script>
export default {
  name: "the-pagination",
  props: {
    pageCount: {
      type: Number,
      default: 5,
    },
    pageRange: {
      type: Number,
      default: 3,
    },
    marginPages: {
      type: Number,
      default: 2,
    },
    page: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    clickCallback(event) {
      this.$emit("selectPage", event);
    },
  },
};
</script>

<style lang="scss"></style>
