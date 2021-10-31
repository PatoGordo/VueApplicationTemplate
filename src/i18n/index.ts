import { createI18n } from "vue-i18n";
import messages from "@intlify/vite-plugin-vue-i18n/messages";
import { getItemName as getPreferenceName } from "@/store/Preferences.store";

const i18n = createI18n({
  locale: localStorage.getItem(getPreferenceName("lang")) || "en",
  messages,
  fallbackLocale: "en",
});

export { i18n };
