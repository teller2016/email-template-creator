<template>
  <Download
    ref="testRef"
    name="테스트"
  >
    <TestEmail></TestEmail>
  </Download>

  <Download
    ref="testRef2"
    name="테스트2"
  >
    <TestEmail2></TestEmail2>
  </Download>

  <span class="btn-position">
    <Button
      @on-click="downloadAll"
      color="green"
      style-type="push"
      >Download All</Button
    >
  </span>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import TestEmail from '@/template/TestEmail.vue';
  import TestEmail2 from '@/template/TestEmail2.vue';
  import Download from '@/components/Download.vue';
  import Button from '@/components/Button.vue';

  const testRef = ref();
  const testRef2 = ref();
  const templateList = ref([testRef, testRef2]);

  const downloadAll = () => {
    templateList.value.forEach((template) => {
      template.value.downloadHTML();
    });
  };
</script>

<style scoped>
  .btn-position {
    position: fixed;
    top: 15px;
    right: 10px;
    height: 40px;
  }
</style>
