<template>
  <div class="search-header">
    <div class="search-input">
      <span class="search-input__caption">Search by release date:</span>
      <input type="text" class="search-input__input" />
    </div>
    <button class="btn-search">Search</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.search-header {
  display: flex;
  align-items: center;
  margin-inline-start: 5rem;
  .search-input {
    .search-input__caption {
      font-weight: 400;
      font-size: 16px;
      margin-inline-end: 1.875rem;
    }
    .search-input__input {
      width: 221px;
      height: 33px;
      border: none;
      border-radius: 4px;
      outline-color: var(--clr-blue-light);
    }
  }
  .btn-search {
    font-size: 1rem;
    background-color: var(--clr-blue-light);
    color: var(--clr-text-light);
    padding: 7px 16px;
    border-radius: 100px;
    width: fit-content;
    height: 33px;
    outline: none;
    border: none;
    cursor: pointer;
    margin-inline-start: auto;
    margin-inline-end: 3.875rem;
  }
}
</style>
