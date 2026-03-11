<template>
  <div class="json-editor-wrapper">
    <div
      ref="editorContainer"
      class="json-editor"
      :style="{ height: height }"
    />
    <div
      v-if="error"
      class="json-error"
    >
      ⚠️ {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import loader, { type Monaco } from '@monaco-editor/loader';

type EditorInstance = ReturnType<Monaco['editor']['create']>;

interface Props {
  modelValue: string;
  height?: string;
  placeholder?: string;
  language?: string;
}

const props = withDefaults(defineProps<Props>(), {
  height: '200px',
  placeholder: '{}',
  language: 'json',
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const editorContainer = ref<HTMLElement | null>(null);
const error = ref<string>('');
let editor: EditorInstance | null = null;

onMounted(async () => {
  if (!editorContainer.value) return;

  const monaco = await loader.init();

  // Create Monaco Editor instance
  editor = monaco.editor.create(editorContainer.value, {
    value: props.modelValue || props.placeholder,
    language: props.language,
    theme: 'vs-dark',
    minimap: { enabled: false },
    automaticLayout: true,
    scrollBeyondLastLine: false,
    fontSize: 13,
    lineNumbers: 'on',
    roundedSelection: false,
    scrollbar: {
      verticalScrollbarSize: 10,
      horizontalScrollbarSize: 10,
    },
    overviewRulerLanes: 0,
    renderLineHighlight: 'none',
    folding: true,
    formatOnPaste: true,
    formatOnType: true,
    tabSize: 2,
    autoIndent: 'full',
    insertSpaces: true,
    detectIndentation: false,
    trimAutoWhitespace: true,
    bracketPairColorization: {
      enabled: true,
    },
  });

  // Listen to content changes
  editor.onDidChangeModelContent(() => {
    if (!editor) return;
    const value = editor.getValue();
    emit('update:modelValue', value);
    
    // Validate JSON
    if (props.language === 'json') {
      try {
        if (value.trim()) {
          JSON.parse(value);
        }
        error.value = '';
      } catch (e) {
        error.value = e instanceof Error ? e.message : 'Invalid JSON';
      }
    }
  });
});

// Watch for external changes to modelValue
watch(() => props.modelValue, (newValue) => {
  if (editor && newValue !== editor.getValue()) {
    editor.setValue(newValue);
  }
});

onBeforeUnmount(() => {
  editor?.dispose();
});
</script>

<style scoped>
.json-editor-wrapper {
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.json-editor {
  width: 100%;
}

.json-error {
  background: #fee;
  border-top: 1px solid #fcc;
  padding: 0.5rem;
  color: #c33;
  font-size: 0.85rem;
  font-family: 'Courier New', monospace;
}
</style>
