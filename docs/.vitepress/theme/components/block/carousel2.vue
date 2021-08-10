<template>
  <vueper-slides lazy lazy-load-on-drag :slideRatio="1 / 4">
    <vueper-slide
      v-for="(slide, i) in props.slides"
      :key="i"
      :image="slide.img"
      :link="slide.href"
    >
      <template #content>
        <div class="content">
          <h2>{{ slide.content }}</h2>
          <a :href="slide.href"
            >前往下载
            <img :src="downIcon" />
          </a>
        </div>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>
<script setup lang="ts">
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import downIcon from '../imgs/down-icon.png'

const props = defineProps({
  slides: Array
})
</script>
<style scoped>
.content {
  color: #fff;
  width: 1024px;
  margin: 0 auto;
}
.content h2 {
  margin-top: 140px;
  width: 290px;
  line-height: 60px;
  border: 0;
  font-size: 36px;
}
.content a {
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  width: 130px;
  height: 50px;
  text-align: center;
}
.content img {
  margin-left: 5px;
}
</style>
