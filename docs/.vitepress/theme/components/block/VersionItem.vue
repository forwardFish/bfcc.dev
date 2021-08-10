<template>
  <div class="version-item" :id="theId">
    <h3>版本号： {{ props.item.version }}</h3>
    <h3>发布时间： {{ props.item.publicTime }}</h3>
    <h3>更新内容：</h3>
    <pre>{{ props.item.content }}</pre>
    <a v-if="props.item.link" :href="props.item.link" target="_blank"
      >立即下载</a
    >
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  item: Object
})

const theId =
  'month-item-' + props.item.publicTime.substr(0, 7).replace('.', '-')
</script>
<style scoped>
.version-item {
  margin-bottom: 40px;
}
h3 {
  font-size: 16px;
  line-height: 20px;
  margin: 0 0 10px 0;
}
a {
  color: #fff;
  display: block;
  background: #4a78f7;
  width: 160px;
  line-height: 44px;
  text-align: center;
  font-size: 14px;
}
</style>
