module.exports = {
  '/guide/pc/': [
    { text: '教程简介', link: '/guide/pc/' },
    { text: '安装运行', link: '/guide/pc/install' },
    { text: '节点部署', link: '/guide/pc/deploy' },
    { text: '常见问题', link: '/guide/pc/faq' },
    { text: '名词解释', link: '/guide/pc/glossary' }
  ],
  '/api/pc/': [
    {
      text: '接口列表',
      children: [
        { text: '概述', link: '/api/pc/1-0' },
        { text: '接口传入参数和返回参数说明', link: '/api/pc/1-1' },
        { text: '基础接口使用说明', link: '/api/pc/1-2' },
        { text: '发送事件接口使用说明', link: '/api/pc/1-3' },
        { text: '节点管理接口使用说明', link: '/api/pc/1-4' },
        { text: '类型定义', link: '/api/pc/1-5' }
      ]
    },
    {
      text: '调用方式以及示例',
      children: [
        { text: '命令行工具', link: '/api/pc/2-1' },
        { text: 'Websocket', link: '/api/pc/2-2' },
        { text: 'Grpc', link: '/api/pc/2-3' },
        { text: 'SDK', link: '/api/pc/2-4' }
      ]
    }
  ],
  '/api/bfs/': [
    {
      text: 'BFS系统API',
      children: [
        { text: 'bfs', link: '/api/bfs/bfs' },
        { text: 'evt', link: '/api/bfs/evt' },
        {
          text: 'bfsprocess',
          link: '/api/bfs/bfsprocess'
        },
        { text: 'link', link: '/api/bfs/link' },
        { text: 'file_system', link: '/api/bfs/file_system' },
        { text: 'openBrl', link: '/api/bfs/openBrl' },
        { text: 'WebViewActivity', link: '/api/bfs/WebViewActivity' }
      ]
    },
    {
      text: 'BFS应用',
      children: [
        { text: 'TUI', link: '/api/bfs/BTP' },
        {
          text: 'BFChain',
          children: [{ text: 'borker', link: '/api/bfs/borker' }]
        },
        { text: 'FinChain' }
        // children: [
        //   { text: 'BTP数据传输协议', link: '/api/bfs/BTP' },
        //   { text: 'BTPTools', link: '/api/bfs/BTPTools' },
        // ]
        // { text: 'TUI', link: '/api/bfs/DomActivity' },
      ]
    }
  ]
}
