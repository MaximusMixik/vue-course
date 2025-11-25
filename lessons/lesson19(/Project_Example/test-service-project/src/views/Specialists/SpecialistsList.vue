<template>
  <h3 v-if="specialistsList.length === 0">
    {{ $t('pages.specialists.messages.empty-list') }}
  </h3>
  <template v-else>
    <div>
      <specialist-item
        v-for="specialist in specialistsList"
        :key="specialist.id"
        :specialist="specialist"
      />
    </div>
  </template>
</template>

<script setup>
import SpecialistItem from './SpecialistItem.vue'

import { computed } from 'vue'

import { useSpecialistsStore } from '@/stores/specialists'
const specialistsStore = useSpecialistsStore()

const specialistsList = computed(() => specialistsStore.getItemsList ?? [])
</script>

<style lang="scss" scoped></style>
