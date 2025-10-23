<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import '../assets/styles.css';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">
Home
</RouterLink>
      <RouterLink to="/about">
About
</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>
