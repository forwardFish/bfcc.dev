import DefaultTheme from 'vitepress/dist/client/theme-default'
import MyHome from '/@theme/components/MyHome.vue'
import GuidePc from '/@theme/components/GuidePc.vue'
import MyBlog from '/@theme/components/MyBlog.vue'
import MyWebviewUpgrade from '/@theme/components/MyWebviewUpgrade.vue'
import MyIpList from '/@theme/components/MyIpList.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app, router, siteData }) => {
    app.component('MyHome', MyHome)
    app.component('GuidePc', GuidePc)
    app.component('MyBlog', MyBlog)
    app.component('MyWebviewUpgrade', MyWebviewUpgrade)
    app.component('MyIpList', MyIpList)
  }
}
