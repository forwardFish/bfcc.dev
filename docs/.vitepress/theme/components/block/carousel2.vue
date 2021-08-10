<template>
  <vueper-slides lazy lazy-load-on-drag :slideRatio="1 / 4">
    <vueper-slide
      v-for="(slide, i) in props.slides"
      :key="i"
      :image="slide.img"
      :link="slide.href"
    >
      <!-- <template #content>
        <div class="content">
          <h2>{{ slide.content }}</h2>
          <a :href="slide.href"
            >前往下载
            <img :src="btnDownload" />
          </a>
        </div>
      </template> -->
    </vueper-slide>
  </vueper-slides>
</template>
<script setup lang="ts">
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
// import btnDownload from '../imgs/btn-download.png'

const props = defineProps({
  slides: Array
})
</script>
<style scoped>
/* .content {
  color: #fff;
  width: 1024px;
  margin: 0 auto;
} */
</style>
