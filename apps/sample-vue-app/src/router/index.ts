import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/authentication',
      name: 'authentication',
      component: () => import('../views/authentication/AuthenticationView.vue'),
    },
    {
      path: '/authentication/callback',
      name: 'authentication-callback',
      component: () => import('../views/authentication/CallbackView.vue'),
    },
    {
      path: '/disclosure',
      name: 'disclosure',
      component: () => import('../views/disclosure/DisclosureView.vue'),
    },
    {
      path: '/disclosure/callback',
      name: 'disclosure-callback',
      component: () => import('../views/disclosure/CallbackView.vue'),
    },
    {
      path: '/graphql',
      name: 'graphql',
      component: () => import('../views/graphql/GraphQLView.vue'),
    },
  ],
});

export default router;
