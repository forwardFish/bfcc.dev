<template>
  <div class="month-list">
    <a
      :href="`#month-item-${item}`"
      @click="activeItem = index"
      :key="item"
      v-for="(item, index) in items"
      :class="activeItem === index ? 'active' : ''"
      >{{ index === 0 ? '当前' : item }}</a
    >
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  items: Array
})
import { ref } from 'vue'

const activeItem = ref(0)
const itemsMap = {}
props.items.forEach(item => {
  const id = item.publicTime.substr(0, 7).replace('.', '-')
  itemsMap[id] = id
})

let items = Object.keys(itemsMap)
</script>
<style scoped>
.month-list {
  position: sticky;
  position: -webkit-sticky;
  width: 100px;
  top: 70px;
  right: 0;
  border-right: 1px solid #ccc;
  padding-right: 20px;
  float: right;
}
a {
  display: block;
  text-align: right;
  font-size: 14px;
  line-height: 1.5em;
  color: #000;
}
a.active {
  color: var(--c-brand);
}
</style>
