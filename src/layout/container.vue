<template>
  <div class="main-container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "container-layout",
};
</script>

<style lang="scss">
.main-container {
  max-width: 64rem;
  margin: auto;
  padding-top: 4.375rem;
}
</style>
