<template>
  <div class="container">
    <h1>Disclosure</h1>
    <p class="description">
      Choose how you want to run the disclosure flow
    </p>

    <div class="options-grid">
      <div class="option-card" @click="navigateTo('browser')">
        <div class="icon">🌐</div>
        <h2>Browser Execution</h2>
        <p>Run the disclosure flow directly in the browser using @ver-id/browser-client</p>
        <ul>
          <li>Client-side OAuth flow</li>
          <li>Direct browser integration</li>
          <li>No backend required</li>
        </ul>
        <button class="btn-primary">Start Browser Flow →</button>
      </div>

      <div class="option-card" @click="navigateTo('node')">
        <div class="icon">🖥️</div>
        <h2>Node.js Execution</h2>
        <p>Run the disclosure flow on the server using @ver-id/node-client via API calls</p>
        <ul>
          <li>Server-side OAuth flow (Recommended)</li>
          <li>Less exposed to client-side attacks</li>
          <li>More secured by client secret</li>
        </ul>
        <button class="btn-primary">Start Node Flow →</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '../../assets/selection-styles.css';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (type: 'browser' | 'node') => {
  router.push(`/disclosure/${type}`);
};
</script>
