<template>
  <header class="header-container">
    <slot />
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header-container {
  display: grid;
  height: 5.375rem;
  background: var(--clr-grey-200);
  border-radius: 6px;
}
</style>
