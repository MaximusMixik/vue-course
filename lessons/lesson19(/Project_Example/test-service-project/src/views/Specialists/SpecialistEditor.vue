<template>
  <main-master-page>
    <div class="editor-container">
      <h1>
        {{
          specialistId ? $t('pages.specialists.title.edit') : $t('pages.specialists.title.create')
        }}
      </h1>
      <div class="form-group">
        <label>
          {{ $t('pages.specialists.fields.name.label') }}
          <input v-model="specialist.title" type="text" />
        </label>
      </div>
      <div class="form-group image">
        <div class="image-preview">
          <img v-if="specialist.img" :src="specialist.img" class="img" />
          <font-awesome-icon v-else :icon="['fas', 'user']" size="4x" class="icon" />
        </div>
        <label>
          {{ $t('pages.specialists.fields.image.label') }}
          <input type="file" @change="loadImage" />
        </label>
      </div>
      <div class="form-group">
        <label>
          {{ $t('pages.specialists.fields.category.label') }}
          <select
            v-model="specialist.category"
            :placeholder="$t('pages.specialists.fields.category.placeholder')"
          >
            <option v-for="categoryId in categoriesList" :key="categoryId" :value="categoryId">
              {{ $t(`categories.${categoryId}`) }}
            </option>
          </select>
        </label>
      </div>
      <div class="actions">
        <button @click="onBtnAction" class="save-btn">{{ btnTitle }}</button>
      </div>
    </div>
  </main-master-page>
</template>

<script setup>
import { categories } from './settings'

import { useI18n } from 'vue-i18n'
const { t } = useI18n({ useScope: 'global' })

import MainMasterPage from '@/masterpages/MainMasterPage.vue'

import { computed, onMounted, ref } from 'vue'
let specialist = ref({})

const categoriesList = computed(() => Object.keys(categories).map((id) => id))

import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const specialistId = computed(() => route.params.id)

import { useSpecialistsStore } from '@/stores/specialists'
const specialistsStore = useSpecialistsStore()

onMounted(async () => {
  if (specialistId.value) {
    specialist.value = await specialistsStore.loadItemById(specialistId.value)
  }
})

function loadImage(event) {
  const file = event.target.files[0]
  if (file) {
    let reader = new FileReader()
    reader.onload = (e) => {
      specialist.value.img = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const btnTitle = computed(() => (specialistId.value ? t('buttons.save') : t('buttons.create')))

async function onBtnAction() {
  if (specialistId.value) await specialistsStore.updateItem(specialistId.value, specialist.value)
  else await specialistsStore.addItem(specialist.value)
  router.push({
    name: 'specialists'
  })
}
</script>

<style lang="scss" scoped>
.editor-container {
  max-width: 600px;
  margin: 32px auto;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h1 {
    color: #2c3e50;
    font-size: 2rem;
    margin-bottom: 24px;
    text-align: center;
  }

  .form-group {
    margin-bottom: 24px;

    label {
      display: block;
      font-weight: 500;
      color: #2c3e50;
      margin-bottom: 8px;
    }

    input[type='text'],
    select {
      width: 100%;
      padding: 10px;
      border: 1px solid #bdc3c7;
      border-radius: 4px;
      font-size: 1rem;
      transition: border-color 0.3s ease;

      &:focus {
        border-color: #3498db;
        outline: none;
      }
    }

    &.image {
      display: flex;
      align-items: center;
      gap: 16px;

      .image-preview {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        background-color: #f5f6fa;
        border-radius: 50%;
        overflow: hidden;

        .img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .icon {
          color: #7f8c8d;
        }
      }

      input[type='file'] {
        display: block;
        margin-top: 8px;
        font-size: 0.9rem;
        color: #2c3e50;
      }
    }
  }

  .actions {
    display: flex;
    justify-content: center;

    .save-btn {
      background-color: #2ecc71;
      padding: 10px 24px;
      font-size: 1rem;
      border-radius: 4px;
      transition: background-color 0.3s ease;

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

    .form-group {
      &.image {
        flex-direction: column;
        align-items: flex-start;

        .image-preview {
          margin-bottom: 16px;
        }
      }
    }
  }
}
</style>
