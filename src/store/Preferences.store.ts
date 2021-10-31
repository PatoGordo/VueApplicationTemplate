import { defineStore } from "pinia";

export function getItemName(name: string, version = "1.0"): string {
  return `app-preference::${name}>>v${version}`;
}

export const usePreferencesStore = defineStore("preferences", {
  state() {
    const theme = localStorage.getItem(getItemName("theme"));
    const lang = localStorage.getItem(getItemName("lang"));

    return {
      theme: theme || "light",
      lang: lang || "en",
    };
  },
  getters: {
    getTheme(): string {
      return this.theme;
    },
    getLang(): string {
      return this.lang;
    },
  },
  actions: {
    changeThemeTo(newTheme: string) {
      this.theme = newTheme;
      localStorage.setItem(getItemName("theme"), newTheme);
      document.body.setAttribute("theme", newTheme);
      document.body.classList.add("fade-transition");
    },
    changeLangTo(newLang: string) {
      this.lang = newLang;
      localStorage.setItem(getItemName("lang"), newLang);
    },
  },
});
