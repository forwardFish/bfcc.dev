module.exports = [
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  {
    text: '教程',
    items: [
      { text: 'PC', link: '/guide/pc/', activeMatch: '^/guide/pc/' },
      { text: 'BFS', link: '/guide/bfs/' }
    ]
  },
  {
    text: 'API 参考',
    items: [
      { text: 'PC', link: '/api/pc/1-0', activeMatch: '^/api/pc/' },
      { text: 'BFS', link: '/api/bfs/bfs', activeMatch: '^/api/bfs/' }
    ]
  },
  { text: '社区问答', link: 'https://qa.bfcc.dev/' }
]
