import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "@/assets/sscss/style.scss";

// Vue.config.productionTip = false;

createApp(App).use(router).use(store).mount("#app");
