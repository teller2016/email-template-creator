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

  <button
    class="btn"
    @click="downloadAll"
  >
    전체 다운로드
  </button>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import TestEmail from '@/template/TestEmail.vue';
  import TestEmail2 from '@/template/TestEmail2.vue';
  import Download from '@/components/Download.vue';

  const testRef = ref();
  const testRef2 = ref();
  const templateList = ref([testRef, testRef2]);

  const downloadAll = () => {
    templateList.value.forEach((template) => {
      template.value.downloadHTML();
    });
  };
</script>

<style>
  .btn {
    position: fixed;
    top: 30px;
    right: 30px;
    height: 40px;
  }
</style>
