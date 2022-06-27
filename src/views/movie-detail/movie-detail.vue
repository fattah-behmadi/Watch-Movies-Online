<template>
  <div>movie detaile</div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params?.id);
  },
};
</script>

<style></style>
