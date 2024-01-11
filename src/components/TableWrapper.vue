<template>
  <table :style="styles.wrapper">
    <slot></slot>
  </table>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import getStyleFromFile from '@/utils/style';

  let styles = ref({});

  onMounted(async () => {
    styles.value = await getStyleFromFile('tableWrapper.css');
  });
</script>

<style></style>
