import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";
import Pagination from "vuejs-paginate-next";
import "@/plugins/axios.plugin";
import DatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

import "@/assets/scss/tailwind-min.css";

const app = createApp(App);
app.component("PaginationList", Pagination);
app.component("DatePicker", DatePicker);
app
  .use(router)
  .use(store)
  .use(Pagination)
  .use(mdiVue, { icons: mdijs })
  .mount("#app");
