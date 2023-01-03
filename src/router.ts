import { useUser } from '@/stores/userStore';
import { createRouter, createWebHistory } from 'vue-router';
import { useMessage } from './stores';
export const router = createRouter({
  history: createWebHistory(),
  routes:
    [
      {
        path: '/',
        component: () => import('@/views.js/Home.vue')
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

      },
      {
         path: '/test',
        component: () => import('@/views.js/Test.vue')
      },
      {
         path: '/message',
        component: () => import('@/views.js/Message.vue')
      },
      {
        path: '/posts',
        component: () => import('@/views.js/Posts.vue')
      },
 
  
      {
        path: '/:notfound(.*)*',
        component: () => import('@/views.js/Notfound.vue')
      }

    ]
    
})
  //On va utiliser un garde qui va se déclencher avant toutes les navigations

router.beforeEach(() => {
    //Je récupère mon utilisateur
    const userStore = useUser();
    // Si le userStore n'est pas chargé on va essayer de le charger
    if (!userStore.loaded) {
     userStore.fetchCurrentUser();
    }
  });