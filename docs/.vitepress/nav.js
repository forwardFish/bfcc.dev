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
      { text: '白皮书', link: '/white-paper-v3.7.pdf', target: 'blank' }
    ]
  },
  {
    text: '社区',
    items: [
      { text: '博客', link: '/blog/index.html' },
      { text: 'GitHub', link: 'https://github.com/BioforestChain' },
      { text: 'Twitter', link: '#' },
      { text: 'Discord', link: 'https://discord.gg/b5mYEw2USV' },
      {
        text: '微信',
        link:
          'https://mp.weixin.qq.com/s?__biz=MzI4MjI3MzYyMQ==&mid=2247483803&idx=1&sn=5926082311caaf586609f4fc96f300f2&chksm=eb9d33a1dceabab7ab90c1a1f314a9db5dc115cbe8f7227e1c11586fc13642e871477987c8c3&mpshare=1&scene=1&srcid=0810i8m0jAXXPp37995Kfuah&sharer_sharetime=1628578163008&sharer_shareid=8d6b801fa29a9ac71b2e4ae097e6e58d&exportkey=AZ2Vl%2FzX3lMgGYMGcuhG2NU%3D&pass_ticket=dqTsPpyt4U603f4JqVh5X7Eynm%2FQES%2FSH4g14SnJSdIlMHBVYIjpFdzSNnpBwCv%2B&wx_header=0#rd'
      },
      { text: '微博', link: 'https://weibo.com/u/7243924626' },
      {
        text: 'Facebook',
        link: 'https://www.facebook.com/BFChain-105459620795589'
      },
      { text: '社区问答', link: 'https://qa.bfcc.dev/' }
    ]
  },
  {
    text: 'English',
    link: 'https://en.bfcc.dev'
  }
]
