module.exports = {
  '/01.guide/pc/': [
    { text: '教程简介', link: '/01.guide/pc/' },
    { text: '安装运行', link: '/01.guide/pc/01.install.html' },
    { text: '节点部署', link: '/01.guide/pc/02.deploy.html' },
    { text: '常见问题', link: '/01.guide/pc/03.faq.html' },
    { text: '名词解释', link: '/01.guide/pc/04.glossary.html' }
  ],
  '/02.api/pc/': [
    {
      text: '接口列表',
      children: [
        { text: '概述', link: '/02.api/pc/1.0.html' },
        { text: '接口传入参数和返回参数说明', link: '/02.api/pc/1.1.html' },
        { text: '基础接口使用说明', link: '/02.api/pc/1.2.html' },
        { text: '发送事件接口使用说明', link: '/02.api/pc/1.3.html' },
        { text: '节点管理接口使用说明', link: '/02.api/pc/1.4.html' },
        { text: '类型定义', link: '/02.api/pc/1.5.html' }
      ]
    },
    {
      text: '调用方式以及示例',
      children: [
        { text: '命令行工具', link: '/02.api/pc/2.1.html' },
        { text: 'Websocket', link: '/02.api/pc/2.2.html' },
        { text: 'Grpc', link: '/02.api/pc/2.3.html' },
        { text: 'SDK', link: '/02.api/pc/2.4.html' }
      ]
    }
  ],
  '/02.api/bfs/': [
    {
      text: 'BFS 接口列表',
      children: [
        { text: 'bfs', link: '/02.api/bfs/bfs' },
        {
          text: 'bfsprocess',
          link: '/02.api/bfs/bfsprocess'
        },
        { text: 'BTP数据传输协议', link: '/02.api/bfs/BTP' },
        { text: 'BTPTools', link: '/02.api/bfs/BTPTools' },
        { text: 'DomActivity', link: '/02.api/bfs/DomActivity' },
        { text: 'evt', link: '/02.api/bfs/evt' },
        { text: 'openBrl', link: '/02.api/bfs/openBrl' },
        { text: 'WebViewActivity', link: '/02.api/bfs/WebViewActivity' }
      ]
    }
  ]
}
