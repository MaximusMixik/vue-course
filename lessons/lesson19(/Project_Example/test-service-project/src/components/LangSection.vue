<template>
  <div class="lang">
    <span
      :class="{
        selected: locale == 'ua'
      }"
      @click="setLocale('ua')"
      >UA</span
    >
    <span
      :class="{
        selected: locale == 'en'
      }"
      @click="setLocale('en')"
    >
      EN</span
    >
  </div>
</template>

<script setup>
import { useLocales } from '@/modulesHelpers/i18n.js'
const { locale, setLocale } = useLocales()
</script>

<style lang="scss" scoped>
.lang {
  span {
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;

    &.selected {
      border: 2px solid #2ecc71;
    }
  }
}
</style>
