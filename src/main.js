import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";
import Pagination from "vuejs-paginate-next";

// createApp(App).use(router).use(store).use(Pagination).mount("#app");

const app = createApp(App);
app.component("PaginationList", Pagination);
app
  .use(router)
  .use(store)
  .use(Pagination)
  .use(mdiVue, { icons: mdijs })
  .mount("#app");
