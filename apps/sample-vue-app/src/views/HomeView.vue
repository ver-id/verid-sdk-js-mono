<script setup lang="ts">
import '../assets/styles.css';
</script>

<template>
  <main class="container">
    <div class="hero">
      <h1>Ver.iD SDK Examples</h1>
      <p class="subtitle">
        Interactive examples demonstrating how to use the Ver.iD JavaScript SDKs
      </p>
    </div>

    <div class="cards">
      <div class="card">
        <h2>Authentication</h2>
        <p>
          Learn how to use @ver-id/browser-client for executing Ver.iD authentication flow to
          perform passwordless authentication.
        </p>
        <router-link
to="/authentication" class="btn"> View Examples → </router-link>
      </div>
      <div class="card">
        <h2>Verification</h2>
        <p>
          Learn how to use @ver-id/browser-client for executing Ver.iD disclosure flow to perform
          KYC/KYB.
        </p>
        <router-link
to="/disclosure" class="btn"> View Examples → </router-link>
      </div>

      <div class="card">
        <h2>GraphQL</h2>
        <p>
          Explore @ver-id/graphql-client for making GraphQL queries and mutations from your browser
          or node applications.
        </p>
        <router-link
to="/graphql" class="btn"> View Examples → </router-link>
      </div>
    </div>

    <div class="section">
      <h2>Getting Started</h2>
      <p>The Ver-ID SDK provides two main packages:</p>
      <ul>
        <li>
          <strong>@ver-id/browser-client</strong> - For browser-based applications using OAuth
          2.0/OpenID Connect
        </li>
        <li>
          <strong>@ver-id/graphql-client</strong> - For GraphQL queries using apollo client with
          in-build authorization and error handling (works in both browser and server-side
          environments)
        </li>
      </ul>
    </div>

    <div class="section">
      <h2>Installation</h2>
      <pre><code># Browser client
npm install @ver-id/browser-client

# GraphQL client (Node.js)
npm install @ver-id/graphql-client</code></pre>
    </div>

    <div class="section">
      <h2>Resources</h2>
      <ul>
        <li>
          <a
href="https://github.com/ver-id/verid-sdk-js-mono" target="_blank"
>GitHub Repository</a>
        </li>
        <li>
          <a
href="../../docs/index.html" target="_blank"
>API Documentation</a>
        </li>
        <li>
          <a
href="../../../../packages/graphql-client/CUSTOM_QUERIES.md" target="_blank"
            >Custom Queries Guide</a
          >
        </li>
      </ul>
    </div>
  </main>
</template>
