<script setup lang="ts">
import AppNavbar from "./components/appNavbar.vue";
</script>

<template>
  <app-navbar />
  <router-view />
</template>

<style>
#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
