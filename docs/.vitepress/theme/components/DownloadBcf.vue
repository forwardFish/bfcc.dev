<template>
  <block-carousel class="top-carsousel" :slides="slideItems" />
  <main class="content-center">
    download content
  </main>
  <block-footer />
</template>

<script setup lang="ts">
import BlockCarousel from './block/carousel.vue'
import BlockFooter from './block/footer.vue'

import homeBannerImg1 from './banners/home1.png'
const slideItems = [{ img: homeBannerImg1, href: '#1' }]
</script>
<style scoped></style>
