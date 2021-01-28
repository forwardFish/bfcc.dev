module.exports = [
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  {
    text: '教程',
    items: [
      { text: 'PC', link: '/01.guide/pc/', activeMatch: '^/01.guide/pc/' },
      { text: 'BFS', link: '/01.guide/bfs/' }
    ]
  },
  {
    text: 'API 参考',
    items: [
      { text: 'PC', link: '/02.api/pc/1.0.html', activeMatch: '^/02.api/pc/' },
      { text: 'BFS', link: '/02.api/bfs/bfs', activeMatch: '^/02.api/bfs/' }
    ]
  },
  { text: '社区问答', link: 'https://qa.bfcc.dev/' }
]
