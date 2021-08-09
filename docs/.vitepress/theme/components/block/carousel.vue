<template>
  <vueper-slides lazy lazy-load-on-drag :slideRatio="1 / 4">
    <vueper-slide
      v-for="(slide, i) in props.slides"
      :key="i"
      :image="slide.img"
      :link="slide.href"
    >
      <template #loader>
        <i class="icon icon-loader spinning"></i>
        <span>Loading...</span>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>
<script setup lang="ts">
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

const props = defineProps({
  slides: Array
})
</script>
<style scoped></style>
