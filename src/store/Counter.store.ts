import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state() {
    return {
      count: Number(localStorage.getItem("count")) || 0,
    };
  },
  actions: {
    increment() {
      this.count++;
      localStorage.setItem("count", `${this.count}`);
      this.makePersistent();
    },
    reset() {
      this.$state.count = 0;
      this.makePersistent();
    },
    makePersistent() {
      localStorage.setItem("count", `${this.count}`);
    },
  },
});
