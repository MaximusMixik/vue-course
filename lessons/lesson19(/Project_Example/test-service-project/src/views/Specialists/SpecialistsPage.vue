<template>
  <main-master-page>
    <div class="specialists-container">
      <div v-if="getCurrentUserPermissions.create" class="actions">
        <button @click="onAdd">{{ $t('buttons.add') }}</button>
      </div>
      <specialists-list />
    </div>
  </main-master-page>
</template>

<script setup>
import SpecialistsList from './SpecialistsList.vue'
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'

const router = useRouter()

import { useSpecialistsStore } from '@/stores/specialists'
import { onMounted } from 'vue'
const specialistsStore = useSpecialistsStore()

import { useUsersStore } from '@/stores/users'
const { getCurrentUserPermissions } = storeToRefs(useUsersStore())

onMounted(() => {
  specialistsStore.loadItemsList()
})

function onAdd() {
  router.push({
    name: 'specialistsConfig'
  })
}
</script>

<style lang="scss" scoped>
.specialists-container {
  max-width: 1000px;
  margin: 32px auto;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h1 {
    color: #2c3e50;
    font-size: 2rem;
    margin-bottom: 24px;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;

    button {
      background-color: #2ecc71;
      &:hover {
        background-color: #27ae60;
      }
    }
  }

  @media (max-width: 768px) {
    margin: 16px;
    padding: 16px;

    h1 {
      font-size: 1.5rem;
    }
  }
}
</style>
