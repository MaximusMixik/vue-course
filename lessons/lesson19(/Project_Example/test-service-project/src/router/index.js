import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView/HomeView.vue'
import LoginPage from '@/views/LoginPage.vue'

import { isAuthenticated, isRouteAvailable } from './helpers'

export const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      requireAuth: false,
      useInMenu: true
    },
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      requireAuth: false,
      useInMenu: false
    },
    component: LoginPage
  },
  {
    path: '/users',
    name: 'users',
    meta: {
      requireAuth: true,
      hasAccess: (permissions) => permissions?.isAdmin,
      useInMenu: true
    },
    component: () => import('../views/UsersPage/UsersPage.vue')
  },
  {
    path: '/specialists',
    children: [
      {
        path: '',
        name: 'specialists',
        meta: {
          requireAuth: false,
          useInMenu: true
        },
        component: () => import('../views/Specialists/SpecialistsPage.vue')
      },
      {
        path: '/config/:id?',
        name: 'specialistsConfig',
        meta: {
          requireAuth: true,
          hasAccess: (permissions) => permissions.update
        },
        component: () => import('../views/Specialists/SpecialistEditor.vue')
      }
    ]
  },
  {
    path: '/appointments',
    name: 'appointments',
    meta: {
      requireAuth: true,
      hasAccess: (permissions) => permissions?.read,
      useInMenu: true
    },
    component: () => import('../views/AppointmentsPage/AppointmentsPage.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      requireAuth: false,
      useInMenu: true
    },
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/:path(.*)*',
    name: 'page-not-found',
    meta: {
      requireAuth: false
    },
    component: () => import('../views/PageNotFound.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  if (to.meta?.requireAuth) {
    if (!isAuthenticated())
      return {
        name: 'login'
      }
    if (!isRouteAvailable(to)) {
      return {
        name: 'page-not-found'
      }
    }
  }
})

export default router
