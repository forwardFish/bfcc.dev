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

import bannerImg2 from './banners/home2.png'
const slideItems = [
  {
    img: bannerImg2,
    href: '#2',
    linkText: '前往查看',
    title: 'BFChain生物链林白皮书',
    desc: '全球首款移动端共识公有链，新数字时代的通用型基础设施'
  }
]
</script>
<style scoped></style>
