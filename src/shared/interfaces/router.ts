
import { createRouter, createWebHistory } from 'vue-router';
export const router = createRouter({
  history: createWebHistory(),
  routes:
  [
    {
      path: '/',
      component: () => import('@/views.js/Home .vue')
    },
    {
      path: '/connexion',
      component: () => import('@/views.js/PageLogin.vue')
    },
    {
      path: '/inscription',
      component: () => import('@/views.js/PageSignup.vue')
    },
    {
      path: '/profil',
      component: () => import('@/views.js/Profile.vue')

    }
  ]
})
//On va utiliser un garde qui va se déclencher avant toutes les navigations
router.beforeEach(() => {

})