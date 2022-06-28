<template>
  <div class="max-h-full max-w-5xl m-auto pt-16 pb-24 bg-slate-900">
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
