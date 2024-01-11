<template>
  <tr class="header">
    <td class="header__top">
      <a
        href="#"
        class="header__logo-link"
      >
        <img
          alt=""
          src="../assets/images/molly.jpg"
          class="header__logo-img"
        />
      </a>
    </td>
  </tr>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
  .header {
    &__top {
      padding: 10px 20px 11px;
      background: #111;
    }
    &__logo-link {
      display: inline-block;
      width: 110px;
      height: auto;
      font-size: 0;
    }
    &__logo-img {
      width: 100%;
      height: 100%;
    }
  }
</style>
