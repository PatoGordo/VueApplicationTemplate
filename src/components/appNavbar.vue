<script setup lang="ts">
import VueLogo from "@/assets/vue-logo.svg";
</script>

<template>
  <nav class="navbar">
    <h1>
      <VueLogo class="svg" />
      Template
    </h1>
  </nav>
</template>

<style lang="scss" scoped>
.svg {
  width: 32px;
  height: 32px;
}
.navbar {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #cecece;
  h1 {
    color: #35495e;
    text-align: center;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
}
</style>
