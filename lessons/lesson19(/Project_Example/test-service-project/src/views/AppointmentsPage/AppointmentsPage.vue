<template>
  <KeepAlive>
    <main-master-page>
      <div class="appointments-container">
        <h1>{{ $t('pages.appointments.title.page') }}</h1>
        <div v-if="specialistsList?.length" class="appointments-list">
          <specialist-item v-for="item in specialistsList" :key="item.id" :specialist="item">
            <template #action>
              <button @click="onCancel(item.id)" class="cancel-btn">
                {{ $t('buttons.cancel') }}
              </button>
            </template>
          </specialist-item>
        </div>
        <div v-else class="empty-message">
          {{ $t('pages.appointments.messages.empty-list') }}
        </div>
      </div>
    </main-master-page>
  </KeepAlive>
</template>

<script setup>
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import SpecialistItem from '@/views/Specialists/SpecialistItem.vue'

import { useAppointmentsStore } from '@/stores/appointments'
import { onMounted, ref } from 'vue'
const appointmentsStore = useAppointmentsStore()

import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()

import { useSpecialistsStore } from '@/stores/specialists'
const specialistsStore = useSpecialistsStore()

const specialistsList = ref(null)

async function loadData() {
  const appointments = (await appointmentsStore.loadItemById(authStore.getUser.uid))?.appointments
  if (appointments?.length) {
    const appointmentsList = Object.keys(appointments).map((key) => appointments[key])
    specialistsList.value = await specialistsStore.loadDocumentsFromIdsList(appointmentsList)
  }
}

onMounted(loadData)

async function onCancel(id) {
  await appointmentsStore.removeItemFromArray(authStore.getUser.uid, 'appointments', id)
  specialistsList.value = specialistsList.value.filter((item) => item.id !== id)
}
</script>

<style lang="scss" scoped>
.appointments-container {
  max-width: 1200px;
  margin: 32px auto;
  padding: 24px;
  background-color: var(--card-background);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);

  h1 {
    color: var(--text-color);
    font-size: 2rem;
    margin-bottom: 24px;
  }

  .appointments-grid {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .grid-header {
    display: grid;
    grid-template-columns: 80px 200px 200px 100px 250px;
    background-color: var(--primary-color);
    color: var(--card-background);
    padding: 12px;
    border-radius: 4px;
    font-weight: 500;

    .header-item {
      text-align: center;
    }
  }

  .empty-message {
    text-align: center;
    color: var(--secondary-text-color);
    font-size: 1.2rem;
    padding: 16px;
  }

  @media (max-width: 768px) {
    margin: 16px;
    padding: 16px;

    h1 {
      font-size: 1.5rem;
    }

    .grid-header {
      grid-template-columns: 60px 150px 150px 80px 200px;
      font-size: 0.9rem;
    }
  }

  @media (max-width: 600px) {
    .grid-header {
      display: none;
    }
  }
}
</style>
