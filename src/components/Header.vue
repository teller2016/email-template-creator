<template>
  <thead>
    <tr :style="style.header">
      <td :style="style.header__top">
        <a
          href="#"
          :style="style.header__logoLink"
        >
          <img
            alt=""
            src="../assets/images/molly.jpg"
            :style="style.header__logoImg"
          />
        </a>
      </td>
    </tr>
  </thead>
</template>

<script setup lang="ts">
  import useStyle from '@/composables/use/use-style';

  const { style } = useStyle('header.css');
</script>

<style lang="scss"></style>
