<template>
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
</template>

<script setup lang="ts">
  import useStyle from '@/composables/use/use-style';

  const { style } = useStyle('header.css');
</script>

<style scoped lang="scss">
  //   .header {
  //     &__top {
  //       padding: 10px 20px 11px;
  //       background: #111;
  //     }
  //     &__logo-link {
  //       display: inline-block;
  //       width: 110px;
  //       height: auto;
  //       font-size: 0;
  //     }
  //     &__logo-img {
  //       width: 100%;
  //       height: 100%;
  //     }
  //   }
</style>
