module.exports = [
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/index.html' },
  {
    text: '教程',
    items: [
      {
        text: 'Windows-PC 端教程',
        link: '/guide/pc/windows/index.html',
        activeMatch: '^/guide/pc/windows/'
      },
      {
        text: 'Linux-PC 端教程',
        link: '/guide/pc/linux/index.html',
        activeMatch: '^/guide/pc/linux/'
      },
      {
        text: 'PC全节点教程',
        link: '/guide/pc/index.html',
        activeMatch: '^/guide/pc/'
      },
      { text: '移动端教程', link: '/guide/bfs/index.html' }
    ]
  },
  {
    text: 'API 参考',
    items: [
      { text: 'PC 端 API', link: '/api/pc/1-0.html', activeMatch: '^/api/pc/' },
      {
        text: '移动端 API',
        link: '/api/bfs/bfs.html',
        activeMatch: '^/api/bfs/'
      }
    ]
  },
  {
    text: '知识库',
    link: '/knowledge/01.html'
  },
  { text: '社区问答', link: 'https://qa.bfcc.dev/' }
]
