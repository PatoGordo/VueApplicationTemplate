<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { CounterStore } from "@/store/CounterStore";
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
import { ref, watch } from "vue";
import { ChangeUserPreference } from "@/shared/user-preferences";

const router = useRouter();
const counterStore = CounterStore();
const { t, locale } = useI18n();

const name = ref("");

watch(locale, (val) => {
  ChangeUserPreference.lang(val as "pt" | "en");
});

function handleSubmit() {
  if (!name.value) {
    alert(t("home.please-type-your-name-in-the-input-above"));
    return;
  }

  router.push(`/hello/${name.value}`);
}
</script>

<template>
  <div>
    <h2><icon icon="mdi:hand-wave" /> {{ t("hello-world") }}</h2>
    <h3>
      {{ t("home.you-clicked") }} {{ counterStore.count }}
      {{ t("home.times") }}!
    </h3>
    <span>
      <button @click="counterStore.reset()">
        {{ t("home.reset-counter") }}
      </button>
      <button @click="counterStore.increment()">
        {{ t("home.increment-counter") }}
      </button>
    </span>
    <br />
    <br />
    <input
      id="name"
      v-model="name"
      type="text"
      name="name"
      :placeholder="t('home.your-name')"
    />
    <br />
    <button @click="handleSubmit">{{ t("home.hello-me") }}!</button>
    <br />
    <br />
    <h3>{{ t("home.choose-your-language") }}</h3>
    <br />
    <select v-model="locale">
      <option value="en">English</option>
      <option value="pt">Português</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min(380px, 100% - 32px);
  h2 {
    margin-bottom: 32px;
    margin-top: 16px;
  }
  h3 {
    margin-bottom: 16px;
  }
  span {
    width: 100%;
    display: flex;
    gap: 8px;
    > button {
      flex: 1;
      padding: 8px 12px;
    }
  }
  > button,
  > input,
  > select {
    width: 100%;
    padding: 8px 12px;
  }
  button,
  select {
    cursor: pointer;
  }
}
</style>
