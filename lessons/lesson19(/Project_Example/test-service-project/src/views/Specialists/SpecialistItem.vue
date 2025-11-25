<template>
  <div class="container">
    <div class="image-container">
      <img v-if="specialist.img" :src="specialist.img" />
      <font-awesome-icon v-else :icon="['fas', 'user']" class="icon" />
    </div>
    <div class="text">{{ specialist.title }}</div>
    <div class="text">
      <div class="category">{{ $t(`categories.${specialist.category}`) }}</div>
      <div>
        <font-awesome-icon
          :icon="categoriesList[specialist.category].icon"
          size="2x"
          :style="{
            color: categoriesList[specialist.category].color
          }"
        />
      </div>
    </div>
    <div class="text">{{ specialist.rating }}</div>
    <div class="action">
      <slot name="action">
        <div>
          <font-awesome-icon
            v-if="getCurrentUserPermissions.update"
            :icon="['fas', 'pen-to-square']"
            @click="onEdit"
            class="icon"
          />
        </div>
        <div>
          <font-awesome-icon
            v-if="getCurrentUserPermissions.delete"
            :icon="['fas', 'trash']"
            class="icon"
            @click="onDelete"
          />
        </div>
        <button
          @click="makeAppointment"
          :disabled="!getCurrentUserPermissions.read"
          :title="!getCurrentUserPermissions.read ? 'Please login' : ''"
        >
          {{ $t('pages.specialists.buttons.make-appointment') }}
        </button>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { categories } from './settings'
const categoriesList = computed(() => categories)

import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()

import { useRouter } from 'vue-router'
import { computed } from 'vue'
const router = useRouter()

import { useUsersStore } from '@/stores/users'
const { getCurrentUserPermissions } = storeToRefs(useUsersStore())

import { useSpecialistsStore } from '@/stores/specialists'
const specStore = useSpecialistsStore()

import { useAppointmentsStore } from '@/stores/appointments'
import { storeToRefs } from 'pinia'
const appointmentsStore = useAppointmentsStore()

//  props
const props = defineProps({
  specialist: {
    type: Object,
    required: true
  }
})

function onEdit() {
  router.push({
    name: 'specialistsConfig',
    params: {
      id: props['specialist'].id
    }
  })
}
function onDelete() {
  specStore.deleteItem(props['specialist'].id)
}
function makeAppointment() {
  appointmentsStore.addItemToArray(authStore.getUser.uid, 'appointments', props.specialist.id)
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 80px 200px 200px 100px 250px;
  align-items: center;
  padding: 16px;
  background-color: #f5f6fa;
  border-radius: 4px;
  margin-bottom: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e8ecef;
  }

  > div {
    text-align: center;
  }

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 60px;
    height: 60px;
    background-color: #ecf0f1;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover; /* Зображення масштабується, зберігаючи пропорції */
    }

    .icon {
      font-size: 30px;
      color: #7f8c8d;
    }
  }

  .text {
    font-weight: 500;
    color: #2c3e50;

    &.category {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      color: #7f8c8d;
    }

    &.rating {
      color: #3498db;
    }
  }

  .action {
    display: flex;
    justify-content: center;
    gap: 12px;
    align-items: center;

    .icon {
      font-size: 18px;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: #3498db; /* Колір для іконки редагування */
      }

      &:last-child:hover {
        color: #e74c3c; /* Колір для іконки видалення */
      }
    }

    button {
      background-color: #3498db;
      padding: 6px 12px;
      font-size: 0.9rem;

      &:hover {
        background-color: #2980b9;
      }

      &:disabled {
        background-color: #bdc3c7;
      }
    }
  }
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 60px 150px 150px 80px 200px;
    font-size: 0.9rem;

    .image-container {
      width: 50px;
      height: 50px;

      img {
        width: 100%;
        height: 100%;
      }

      .icon {
        font-size: 24px;
      }
    }

    .action {
      button {
        padding: 4px 8px;
        font-size: 0.8rem;
      }
    }
  }
}

@media (max-width: 600px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 16px;

    .image-container {
      width: 60px;
      height: 60px;

      img {
        width: 100%;
        height: 100%;
      }

      .icon {
        font-size: 30px;
      }
    }
  }
}
</style>
