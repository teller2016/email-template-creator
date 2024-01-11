<template>
  <a
    href="#"
    class="button"
    @click.prevent="onClick"
    :class="{
      //size
      sizeXS: 'xs' === size, //24
      sizeS: 's' === size, //32
      sizeM: 'm' === size, //40
      sizeL: 'l' === size, //48

      btnBlueGreen: 'green' === color,
      btnLightBlue: 'blue' === color,
      btnOrange: 'orange' === color,
      btnPurple: 'purple' === color,

      btnFade: 'fade' === styleType,
      btnPush: 'push' === styleType,
      btnBorder: 'border' === styleType,
      btnFloat: 'float' === styleType,
      btnSlide: 'slide' === styleType,
    }"
  >
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
  defineProps({
    size: {
      type: String,
      default: 'm',
    },
    color: {
      type: String,
      default: 'green',
    },
    styleType: {
      type: String,
      default: 'fade',
    },
  });
  const emit = defineEmits(['onClick']);
  const onClick = () => {
    emit('onClick');
  };
</script>

<style scoped>
  @import '@/styles/button.css';
</style>
