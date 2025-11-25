<script setup>
import SimpleMasterPage from '@/masterpages/SimpleMasterPage.vue'
import { ref, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()

import { useRouter } from 'vue-router'
const router = useRouter()

const email = ref(null)
const password = ref(null)

const isDataValid = computed(() => {
  return email.value && password.value
})

const { signUpWithWithEmailAndPassword, signInWithWithEmailAndPassword, loginWithGoogleAccount } =
  authStore

function registerWithEmailAndPassword(email, password) {
  signUpWithWithEmailAndPassword(email, password).then(() => {
    router.push({
      name: 'home'
    })
  })
}

function loginWithEmailAndPassword(email, password) {
  signInWithWithEmailAndPassword(email, password).then(() => {
    router.push({
      name: 'home'
    })
  })
}

function loginWithGoogle() {
  loginWithGoogleAccount().then(() => {
    router.push({
      name: 'home'
    })
  })
}
</script>

<template>
  <simple-master-page>
    <template #header>
      <h1>{{ $t('pages.login.title.page') }}</h1>
    </template>

    <div class="mt-16">
      <label>
        {{ $t('pages.login.fields.email.label') }}
        <input
          v-model="email"
          type="email"
          :placeholder="$t('pages.login.fields.email.placeholder')"
        />
      </label>
    </div>
    <div class="mt-16">
      <label>
        {{ $t('pages.login.fields.password.label') }}
        <input
          v-model="password"
          type="password"
          :placeholder="$t('pages.login.fields.password.placeholder')"
        />
      </label>
    </div>
    <button
      @click="registerWithEmailAndPassword(email, password)"
      :disabled="!isDataValid"
      class="mt-16"
    >
      Register
    </button>
    <button
      @click="loginWithEmailAndPassword(email, password)"
      :disabled="!isDataValid"
      class="mt-16 ml-16"
    >
      Login
    </button>
    <div class="mt-16">
      <button @click="loginWithGoogle">
        Login with Google
        <font-awesome-icon :icon="['fab', 'google']" color="red" />
      </button>
    </div>
  </simple-master-page>
</template>

<style lang="scss" scoped>
.mt-16 {
  margin-top: 16px;
}
.ml-16 {
  margin-left: 16px;
}
</style>
