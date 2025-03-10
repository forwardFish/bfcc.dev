module.exports = {
  '/guide/pc/windows/': [
    { text: '教程简介', link: '/guide/pc/windows/index.html' },
    { text: '安装运行', link: '/guide/pc/windows/install.html' },
    { text: '节点部署', link: '/guide/pc/windows/deploy.html' },
    { text: '常见问题', link: '/guide/pc/windows/faq.html' },
    { text: '名词解释', link: '/guide/pc/windows/glossary.html' }
  ],
  '/guide/pc/linux/': [
    { text: '教程简介', link: '/guide/pc/linux/index.html' },
    { text: '搭建Linux环境', link: '/guide/pc/linux/env-install.html' },
    { text: '节点部署', link: '/guide/pc/linux/deploy.html' },
    { text: '节点授权与配置', link: '/guide/pc/linux/authorize.html' }
  ],
  '/api/pc/': [
    {
      text: '接口列表',
      children: [
        { text: '概述', link: '/api/pc/1-0.html' },
        { text: '接口传入参数和返回参数说明', link: '/api/pc/1-1.html' },
        { text: '基础接口使用说明', link: '/api/pc/1-2.html' },
        { text: '发送事件接口使用说明', link: '/api/pc/1-3.html' },
        { text: '节点管理接口使用说明', link: '/api/pc/1-4.html' },
        { text: '类型定义', link: '/api/pc/1-5.html' }
      ]
    },
    {
      text: '调用方式以及示例',
      children: [
        { text: '命令行工具', link: '/api/pc/2-1.html' },
        { text: 'Websocket', link: '/api/pc/2-2.html' },
        { text: 'Grpc', link: '/api/pc/2-3.html' },
        { text: 'SDK', link: '/api/pc/2-4.html' }
      ]
    }
  ],
  '/api/bfs/': [
    {
      text: 'BFS系统API',
      children: [
        { text: 'bfs', link: '/api/bfs/bfs.html' },
        { text: 'evt', link: '/api/bfs/evt.html' },
        {
          text: 'bfsprocess.html',
          link: '/api/bfs/bfsprocess.html'
        },
        { text: 'link', link: '/api/bfs/link.html' },
        { text: 'file_system', link: '/api/bfs/file_system.html' },
        { text: 'openBrl', link: '/api/bfs/openBrl.html' },
        { text: 'WebViewActivity', link: '/api/bfs/WebViewActivity.html' }
      ]
    },
    {
      text: 'BFS应用',
      children: [
        { text: 'TUI', link: '/api/bfs/BTP.html' }
        // {
        //   text: 'BFChain',
        //   children: [{ text: 'borker', link: '/api/bfs/borker' }]
        // }
        // { text: 'FinChain' }
        // children: [
        //   { text: 'BTP数据传输协议', link: '/api/bfs/BTP' },
        //   { text: 'BTPTools', link: '/api/bfs/BTPTools' },
        // ]
        // { text: 'TUI', link: '/api/bfs/DomActivity' },
      ]
    }
  ],
  '/knowledge/': [
    {
      text: '知识库',
      children: [
        { text: '共识激励机制', link: '/knowledge/01.html' },
        { text: '共识投票机制', link: '/knowledge/02.html' },
        { text: '区块锻造者竞选', link: '/knowledge/03.html' }
      ]
    },
  ]
}
