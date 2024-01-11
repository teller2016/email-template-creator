<template>
  <div ref="htmlContent">
    <TableWrapper>
      <EmailHeader></EmailHeader>
    </TableWrapper>
  </div>

  <button
    type="button"
    @click.prevent="downloadHTML"
  >
    HTML 다운로드
  </button>
</template>

<script setup lang="ts">
  import EmailHeader from '@/components/EmailHeader.vue';
  import TableWrapper from '@/components/TableWrapper.vue';
  import { ref } from 'vue';

  const htmlContent = ref<HTMLElement>();
  const downloadHTML = () => {
    const html = htmlContent.value?.innerHTML;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'test.html';
    a.click();
  };
</script>

<style scoped></style>
