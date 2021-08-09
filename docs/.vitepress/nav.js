module.exports = [
  { text: '首页', link: '/' },
  {
    text: '教程',
    items: [
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
      { text: 'PC全节点', link: '/api/pc/1-0.html', activeMatch: '^/api/pc/' },
      {
        text: 'BFS',
        link: '/api/bfs/bfs.html',
        activeMatch: '^/api/bfs/'
      }
    ]
  },
  {
    text: '知识库',
    link: '/knowledge/01.html'
  },
  {
    text: '资源下载',
    items: [
      {
        text: 'BFChain 节点软件',
        link: '/download/bcf.html',
        activeMatch: '^/download/'
      },
      { text: '白皮书', link: 'https://bfcc.dev/white-paper-v3.7.pdf' }
    ]
  },
  {
    text: '社区',
    items: [
      { text: '博客', link: '/blog/index.html' },
      { text: 'GitHub', link: 'https://github.com/BioforestChain' },
      { text: 'Twitter', link: '#' },
      { text: 'Discord', link: 'https://discord.gg/b5mYEw2USV' },
      { text: '微信', link: '#' },
      { text: '微博', link: 'https://weibo.com/u/7243924626' },
      {
        text: 'Facebook',
        link: 'https://www.facebook.com/BFChain-105459620795589'
      },
      { text: '社区问答', link: 'https://qa.bfcc.dev/' }
    ]
  }
]
