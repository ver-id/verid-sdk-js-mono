<template>
  <div class="container">
    <h1>Issuance</h1>
    <p class="description">
      Choose how you want to run the issuance flow
    </p>

    <div class="options-grid">
      <div
        class="option-card"
        @click="navigateTo('browser')"
      >
        <div class="icon">
          🌐
        </div>
        <h2>Browser Execution</h2>
        <p>Run the issuance flow directly in the browser using @ver-id/browser-client</p>
        <ul>
          <li>Client-side OAuth flow</li>
          <li>Intent creation is MANDATORY</li>
          <li>Direct browser integration</li>
          <li>No backend required</li>
        </ul>
        <button class="btn-primary">
          Start Browser Flow →
        </button>
      </div>

      <div
        class="option-card"
        @click="navigateTo('server')"
      >
        <div class="icon">
          🖥️
        </div>
        <h2>Node.js Execution</h2>
        <p>Run the issuance flow on the server using @ver-id/node-client via API calls</p>
        <ul>
          <li>Server-side OAuth flow (Recommended)</li>
          <li>Intent creation is MANDATORY</li>
          <li>Less exposed to client-side attacks</li>
          <li>More secured by client secret</li>
        </ul>
        <button class="btn-primary">
          Start Node Flow →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import '../../assets/selection-styles.css';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (type: 'browser' | 'server') => {
  router.push(`/issuance/${type}`);
};
</script>
