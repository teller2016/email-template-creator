<template>
  <table :style="style.wrapper">
    <slot></slot>
  </table>
</template>

<script setup lang="ts">
  import useStyle from '@/composables/use/use-style';

  const { style } = useStyle('tableWrapper.css');
</script>

<style></style>
