import DefaultTheme from 'vitepress/dist/client/theme-default'
import MyHome from '/@theme/components/MyHome.vue'
import MyBlog from '/@theme/components/MyBlog.vue'
import MyWebviewUpgrade from '/@theme/components/MyWebviewUpgrade.vue'
import IpList from '/@theme/components/IpList.vue'


export default {
  ...DefaultTheme,
  enhanceApp: ({ app, router, siteData }) => {
    app.component('MyHome', MyHome)
    app.component('MyBlog', MyBlog)
    app.component('MyWebviewUpgrade', MyWebviewUpgrade)
    app.component('IpList',IpList)
  }
}
