const nav = require('./nav')
const sidebar = require('./sidebar')
const constConfig = require('./const')

module.exports = {
  lang: 'zh-CN',
  title: 'BFChain 开发者社区',
  description: '为开发者提供全方位服务和工具，帮助构建区块链生态体系。',
  themeConfig: {
    constConfig,
    repo: 'BioforestChain/bfcc.dev',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑',
    nav,
    sidebar
  }
}
