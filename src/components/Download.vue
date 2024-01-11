<template>
  <h3>
    템플릿명: {{ name }}
    <Button
      @on-click="downloadHTML"
      color="orange"
      style-type="border"
      size="s"
      >Download</Button
    >
  </h3>
  <div ref="htmlContent">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Button from '@/components/Button.vue';

  const props = defineProps(['name']);

  const htmlContent = ref<HTMLElement>();
  const downloadHTML = () => {
    const html = htmlContent.value?.innerHTML;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${props.name}.html`;
    a.click();
  };

  defineExpose({
    downloadHTML,
  });
</script>

<style scoped></style>
