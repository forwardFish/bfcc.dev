module.exports = [
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  {
    text: '教程',
    items: [
      { text: 'PC 端教程', link: '/guide/pc/', activeMatch: '^/guide/pc/' },
      { text: '移动端教程', link: '/guide/bfs/' }
    ]
  },
  {
    text: 'API 参考',
    items: [
      { text: 'PC 端 API', link: '/api/pc/1-0', activeMatch: '^/api/pc/' },
      { text: '移动端 API', link: '/api/bfs/bfs', activeMatch: '^/api/bfs/' }
    ]
  },
  { text: '社区问答', link: 'https://qa.bfcc.dev/' }
]
