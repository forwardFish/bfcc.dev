<template>
  <vueper-slides :slideRatio="1 / 4" 3d>
    <vueper-slide
      v-for="(slide, i) in props.slides"
      :key="i"
      :image="slide.img"
    >
      <template #content>
        <div class="content" :class="slide.isCenter ? 'center' : ''">
          <h2>{{ slide.title }}</h2>
          <p>{{ slide.desc }}</p>
          <a :href="slide.href" v-if="slide.linkText"
            >{{ slide.linkText }}
            <img :src="slide.linkIcon" v-if="slide.linkIcon" />
          </a>
        </div>
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
<style scoped>
.content {
  color: #fff;
  width: 1024px;
  margin: 0 auto;
}
.content h2 {
  margin-top: 140px;
  margin-bottom: 0;
  border: 0;
  font-size: 36px;
}
.content p {
  margin-bottom: 36px;
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
.center h2,
.center p {
  text-align: center;
  color: #131313;
}
</style>
