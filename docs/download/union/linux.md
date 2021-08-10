# Linux系统 BCF节点软件更新记录
<div class="desc">及时了解 BFChain 生物链林节点软件 - BCF 的最新功能、改进和错误修复。</div>

<style scoped>
.desc{
  border-bottom: 1px solid #ccc;
  padding-top: 12px;
  padding-bottom: 24px;
  margin-bottom: 24px;
}
.version-box{
  position: relative;
}
</style>

<script setup>
const items = [
  {
    version: '2.0.0', publicTime: '2021.09.10', 
    link: '#',
    content: 
`• 更新内容更新内容
• 更新内容更新内容
• 更新内容更新内容
• 更新内容更新内容
• 更新内容更新内容
• 更新内容更新内容`
  },
  {
    version: '1.2.0', publicTime: '2021.08.15', 
    content: 
`• 更新内容更新内容
• 更新内容更新内容
• 更新内容更新内容
• 更新内容更新内容
• 更新内容更新内容
• 更新内容更新内容`
  },
  {
    version: '1.0.0', publicTime: '2021.07.10', 
    content: 
`• 更新内容更新内容
• 更新内容更新内容
• 更新内容更新内容
• 更新内容更新内容
• 更新内容更新内容
• 更新内容更新内容`
  },
  {
    version: '1.0.0', publicTime: '2021.03.10', 
    content: 
`• 更新内容更新内容
• 更新内容更新内容
• 更新内容更新内容
• 更新内容更新内容
• 更新内容更新内容
• 更新内容更新内容`
  },
]
</script>

<div class="version-box">
  <month-list :items="items" />
  <version-item v-for="item in items" :item="item" :key="item.version" />
</div>

