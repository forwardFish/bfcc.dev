<template>
  <block-carousel class="top-carsousel" :slides="slideItems" />
  <main class="content-center">
    guide pc content
  </main>
  <block-footer />
</template>

<script setup lang="ts">
import BlockCarousel from './block/carousel.vue'
import BlockFooter from './block/footer.vue'

import homeBannerImg1 from './banners/home1.png'
import homeBannerImg2 from './banners/home2.png'
import homeBannerImg3 from './banners/home3.png'
const slideItems = [
  { img: homeBannerImg1, href: '#1' },
  { img: homeBannerImg2, href: '#2' },
  { img: homeBannerImg3, href: '#3' }
]
</script>
<style scoped></style>
