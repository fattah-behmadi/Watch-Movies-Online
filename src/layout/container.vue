<template>
  <div class="main-container">
    <!-- <transition name="fade" mode="out-in">
      <router-view />
    </transition> -->

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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

.fade-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
