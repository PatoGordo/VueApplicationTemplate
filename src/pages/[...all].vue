<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <div>
    <h2>404 - {{ t("404.page-not-found") }}</h2>
    <br />
    <router-link to="/">{{ t("404.return-to-home") }}</router-link>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    margin-bottom: 32px;
    margin-top: 16px;
  }
}
</style>
