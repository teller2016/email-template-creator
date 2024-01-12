<template>
  <table
    class="template"
    :style="style.wrapper"
    :filename="filename"
  >
    <slot></slot>
  </table>
</template>

<script setup lang="ts">
  import useStyle from '@/composables/use/use-style';

  const { style } = useStyle('wrapper.css');
  defineProps({
    filename: String,
  });
</script>

<style></style>
