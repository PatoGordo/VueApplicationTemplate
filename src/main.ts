import { createPinia } from "pinia";
import { createApp } from "vue";
import { router } from "@/router";
import { i18n } from "@/i18n";
import App from "@/App.vue";
import "@/styles/global.scss";

if (typeof window !== "undefined") {
  import("./pwa");
}

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(i18n);
app.use(router);

app.mount("#app");
