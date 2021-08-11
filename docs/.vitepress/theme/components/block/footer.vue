<template>
  <footer>
    <div class="content">
      <div class="footer-title">
        BFChain开发者社区
      </div>
      <div class="footer-content">
        <div
          class="content-list"
          v-for="contentItem in footerContent"
          :key="contentItem"
        >
          <div class="content-item-title">{{ contentItem.title }}</div>
          <div class="list-item" v-for="item in contentItem.list" :key="item">
            <a :href="item.link">{{ item.text }}</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="logos">
          <div class="logo" v-for="logo in logos">
            <a :href="logo.link" rel="noopener noreferrer">
              <img :src="logo.img_url" alt="logo" />
            </a>
          </div>
        </div>
        <div class="copyright">
          Copyright © BFChain, All Rights Reserved. BFChain开发者社区 版权所有
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { useData } from 'vitepress'
const { theme } = useData()
const { constConfig } = theme.value
const footerContent = [
  {
    title: '资源',
    type: 'source',
    list: [
      {
        text: 'BFSystem',
        link: '/guide/bfs/index.html'
      },
      {
        text: 'PC全节点',
        link: '/guide/pc/index.html'
      },
      {
        text: '知识库',
        link: '/knowledge/01.html'
      },
      {
        text: 'API参考',
        link: '/api/pc/1-0.html'
      },
      {
        text: '工具下载',
        link: constConfig.test
      },
      {
        text: '白皮书',
        link: constConfig.whitePaper
      }
    ]
  },
  {
    title: '支持与服务',
    type: 'service',
    list: [
      {
        text: '社区问答',
        link: constConfig.qa
      },
      {
        text: '产品迭代',
        link: constConfig.test
      },
      {
        text: '商用授权协议',
        link: constConfig.test
      },
      {
        text: '加入我们',
        link: constConfig.test
      },
      {
        text: '联系我们',
        link: constConfig.join
      }
    ]
  },
  {
    title: '社区',
    type: 'community',
    list: [
      {
        text: 'Github',
        link: constConfig.github
      },
      {
        text: 'Twitter',
        link: constConfig.twitter
      },
      {
        text: 'Facebook',
        link: constConfig.fb
      },
      {
        text: 'Discord',
        link: constConfig.discord
      },
      {
        text: '微信',
        link: constConfig.weixin
      },
      {
        text: '微博',
        link: constConfig.weibo
      }
    ]
  },
  {
    title: '友情链接',
    type: 'links',
    list: [
      {
        text: 'BFChain官网',
        link: 'https://www.bfchain.org/'
      },
      {
        text: '实施平台',
        link: 'https://instinct.one/home'
      }
    ]
  },
  {
    title: '联系我们',
    type: 'contact',
    list: [
      {
        text: constConfig.contactEmail,
        link: constConfig.contactEmail
      }
    ]
  }
]
const IMG_BASE = '/.vitepress/theme/components/imgs'
const logos = [
  {
    name: 'Github',
    img_url: `${IMG_BASE}/icon_github.png`,
    link: constConfig.test
  },
  {
    name: 'Twitter',
    img_url: `${IMG_BASE}/icon_twitter.png`,
    link: constConfig.test
  },
  {
    name: 'weixin',
    img_url: `${IMG_BASE}/icon_weixin.png`,
    link: constConfig.test
  },
  {
    name: 'weibo',
    img_url: `${IMG_BASE}/icon_weibo.png`,
    link: constConfig.test
  }
]
</script>
<style scoped>
/* -----main global end------- */

footer {
  background-color: #162347;
  color: #fff;
  display: flex;
  margin-top: 40px;
}
.content {
  margin: 0 auto;
  width: 1024px;
  max-width: 1366px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 48px;
}
.footer-title {
  font-size: 28px;
  font-weight: bold;
  font-family: PingFangSC-Semibold;
  color: #ffffff;
}
.footer-content {
  padding: 32px 0;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #fff;
}

.content-item-title {
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  font-family: PingFangSC-Semibold;
}
.list-item {
  margin-top: 12px;
  font-size: 14px;
}
.list-item > a {
  color: #fff;
  text-decoration: none;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #fff;
  padding: 36px 0;
}

.logos {
  display: flex;
}
.logo {
  margin-right: 20px;
}
</style>
