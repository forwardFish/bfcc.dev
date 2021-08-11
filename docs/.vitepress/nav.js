const constConfig = require('./const')

module.exports = [
  { text: '首页', link: '/' },
  {
    text: '教程',
    activeMatch: '^/guide',
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
    activeMatch: '^/api',
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
      { text: '白皮书', link: constConfig.whitePaper, target: 'blank' }
    ]
  },
  {
    text: '社区',
    items: [
      { text: '博客', link: constConfig.blog },
      { text: 'GitHub', link: constConfig.github },
      { text: 'Twitter', link: constConfig.twitter },
      { text: 'Discord', link: constConfig.discord },
      {
        text: '微信',
        link: constConfig.weixin
      },
      { text: '微博', link: constConfig.weibo },
      {
        text: 'Facebook',
        link: constConfig.fb
      },
      { text: '社区问答', link: constConfig.qa }
    ]
  },
  {
    text: 'English',
    link: constConfig.en
  }
]
