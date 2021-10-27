<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { defineProps } from "vue";

const { t } = useI18n();

defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <h2>{{ t("hello.hello") }}, {{ name }}!</h2>
    <br />
    <router-link to="/">{{ t("hello.return-to-home") }}</router-link>
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
