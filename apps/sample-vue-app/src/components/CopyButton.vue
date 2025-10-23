<template>
  <button
    class="copy-btn"
    :class="{ copied }"
    :title="copied ? 'Copied!' : 'Copy to clipboard'"
    @click="copyToClipboard"
  >
    <span v-if="copied">✓ Copied</span>
    <span v-else>📋 Copy</span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  content: string;
}>();

const copied = ref(false);
let timeoutId: number | null = null;

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.content);
    copied.value = true;

    // Clear any existing timeout
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    // Reset after 2 seconds
    timeoutId = window.setTimeout(() => {
      copied.value = false;
      timeoutId = null;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy:', err);
  }
};
</script>

<style scoped>
.copy-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(66, 185, 131, 0.9);
  color: white;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s;
  z-index: 10;
}

.copy-btn:hover {
  background: rgba(53, 163, 114, 1);
  transform: scale(1.05);
}

.copy-btn.copied {
  background: rgba(40, 167, 69, 0.9);
}
</style>
