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
      component: () => import('../views/authentication/AuthenticationSelectionView.vue'),
    },
    {
      path: '/authentication/browser',
      name: 'authentication-browser',
      component: () => import('../views/authentication/browser/BrowserAuthenticationView.vue'),
    },
    {
      path: '/authentication/browser/callback',
      name: 'authentication-browser-callback',
      component: () => import('../views/authentication/browser/BrowserCallbackView.vue'),
    },
    {
      path: '/authentication/node',
      name: 'authentication-node',
      component: () => import('../views/authentication/server/NodeAuthenticationView.vue'),
    },
    {
      path: '/authentication/node/callback',
      name: 'authentication-node-callback',
      component: () => import('../views/authentication/server/NodeCallbackView.vue'),
    },
    {
      path: '/disclosure',
      name: 'disclosure',
      component: () => import('../views/disclosure/DisclosureSelectionView.vue'),
    },
    {
      path: '/disclosure/browser',
      name: 'disclosure-browser',
      component: () => import('../views/disclosure/browser/BrowserDisclosureView.vue'),
    },
    {
      path: '/disclosure/browser/callback',
      name: 'disclosure-browser-callback',
      component: () => import('../views/disclosure/browser/BrowserCallbackView.vue'),
    },
    {
      path: '/disclosure/node',
      name: 'disclosure-node',
      component: () => import('../views/disclosure/server/NodeDisclosureView.vue'),
    },
    {
      path: '/disclosure/node/callback',
      name: 'disclosure-node-callback',
      component: () => import('../views/disclosure/server/NodeCallbackView.vue'),
    },
    {
      path: '/disclosure/embedded',
      name: 'disclosure-embedded',
      component: () => import('../views/disclosure/embedded/EmbeddedDisclosureView.vue'),
    },
    {
      path: '/issuance',
      name: 'issuance',
      component: () => import('../views/issuance/IssuanceSelectionView.vue'),
    },
    {
      path: '/issuance/browser',
      name: 'issuance-browser',
      component: () => import('../views/issuance/browser/BrowserIssuanceView.vue'),
    },
    {
      path: '/issuance/browser/callback',
      name: 'issuance-browser-callback',
      component: () => import('../views/issuance/browser/BrowserCallbackView.vue'),
    },
    {
      path: '/issuance/server',
      name: 'issuance-server',
      component: () => import('../views/issuance/server/NodeIssuanceView.vue'),
    },
    {
      path: '/issuance/server/callback',
      name: 'issuance-server-callback',
      component: () => import('../views/issuance/server/NodeCallbackView.vue'),
    },
    {
      path: '/graphql',
      name: 'graphql',
      component: () => import('../views/graphql/GraphQLView.vue'),
    },
  ],
});

export default router;
