<template>
  <div class="pagination-container">
    <pagination-list
      v-model="page"
      :page-count="pageCount"
      :page-range="pageRange"
      :margin-pages="marginPages"
      :click-handler="clickCallback"
      :prev-text="'Previous Page'"
      :next-text="'Next Page'"
      :container-class="'pagination'"
      :page-class="'page-item'"
      :active-class="'active-item'"
      :page-link-class="'page-link'"
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
      default: 5,
    },
    marginPages: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    clickCallback(event) {
      this.$emit("selectPage", event);
    },
  },
};
</script>

<style lang="scss">
.pagination-container {
  width: fit-content;
  margin: auto;
  margin-top: 10.625rem;

  .pagination {
    list-style: none;
    display: flex;
    align-items: center;
    .page-item {
      display: grid;
      color: var(--clr-grey-400);
      border-inline-end: 1px solid var(--clr-grey-300);
      cursor: pointer;
      user-select: all;
      transition: all 0.2s ease-in-out;
      &:last-child {
        border: none;
      }
      &:hover {
        background-color: var(--clr-grey-100);
      }

      .page-link {
        padding: 0.625rem 1rem;
        user-select: none;
      }
    }
    .active-item {
      color: var(--clr-blue-light);
      font-weight: 600;
    }
  }
}
</style>
