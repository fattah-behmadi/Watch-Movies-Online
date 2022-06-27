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
  width: 100%;
  height: 100%;
  margin: auto;
  padding-top: 4.375rem;
  padding-bottom: 5.625rem;
}
</style>
