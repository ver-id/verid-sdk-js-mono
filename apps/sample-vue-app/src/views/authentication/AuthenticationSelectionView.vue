<template>
  <div class="container">
    <h1>Authentication</h1>
    <p class="description">
      Choose how you want to run the authentication flow
    </p>

    <div class="options-grid">
      <div class="option-card" @click="navigateTo('browser')">
        <div class="icon">🌐</div>
        <h2>Browser Execution</h2>
        <p>Run the authentication flow directly in the browser using @ver-id/browser-client</p>
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
        <p>Run the authentication flow on the server using @ver-id/node-client via API calls</p>
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
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (type: 'browser' | 'node') => {
  router.push(`/authentication/${type}`);
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.option-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s;
  border: 2px solid transparent;
}

.option-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  border-color: #42b983;
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.option-card h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.option-card p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.option-card ul {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.option-card ul li {
  padding: 0.5rem 0;
  color: #555;
  position: relative;
  padding-left: 1.5rem;
}

.option-card ul li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #42b983;
  font-weight: bold;
}

.btn-primary {
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-primary:hover {
  background: #359268;
}
</style>
