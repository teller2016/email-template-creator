<template>
  <div class="download">
    <h3 class="download__title">
      {{ name }}
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
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import Button from '@/components/Button.vue';

  const props = defineProps(['name']);

  const htmlContent = ref<HTMLElement>();
  const downloadHTML = () => {
    const htmlElement = htmlContent.value;
    if (!htmlElement) return;
    const html = htmlElement.innerHTML;
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

<style scoped lang="scss">
  .download {
    border-bottom: 1px solid black;
    padding-bottom: 20px;

    &__title {
      text-align: center;
    }
  }
</style>
