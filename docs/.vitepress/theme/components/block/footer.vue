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
            {{ item.text }}
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="logos">
          <div class="logo" v-for="logo in logos">
            <img :src="logo.img_url" alt="logo" />
          </div>
        </div>
        <div class="copyright">
          Copyright © BFChain, All Rights Reserved. BFChain开发者社区 版权所有
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
const footerContent = [
  {
    title: '资源',
    type: 'source',
    list: [
      {
        text: 'BFSystem',
        link: '#'
      },
      {
        text: 'PC全节点',
        link: '#'
      },
      {
        text: '知识库',
        link: '#'
      },
      {
        text: 'API参考',
        link: '#'
      },
      {
        text: '工具下载',
        link: '#'
      },
      {
        text: '白皮书',
        link: '#'
      }
    ]
  },
  {
    title: '支持与服务',
    type: 'service',
    list: [
      {
        text: '社区问答',
        link: '#'
      },
      {
        text: '产品迭代',
        link: '#'
      },
      {
        text: '商务合作',
        link: '#'
      },
      {
        text: '商用授权协议',
        link: '#'
      },
      {
        text: '加入我们',
        link: '#'
      },
      {
        text: '联系我们',
        link: '#'
      }
    ]
  },
  {
    title: '社区',
    type: 'community',
    list: [
      {
        text: 'Github',
        link: '#'
      },
      {
        text: 'Twitter',
        link: '#'
      },
      {
        text: 'Facebook',
        link: '#'
      },
      {
        text: 'Discord',
        link: '#'
      },
      {
        text: '微信',
        link: '#'
      },
      {
        text: '微博',
        link: '#'
      },
      {
        text: '抖音',
        link: '#'
      },
      {
        text: '知乎',
        link: '#'
      }
    ]
  },
  {
    title: '友情链接',
    type: 'links',
    list: [
      {
        text: 'BFChain官网',
        link: '#'
      },
      {
        text: '实施平台',
        link: '#'
      }
    ]
  },
  {
    title: '联系我们',
    type: 'contact',
    list: [
      {
        text: 'service@bfchain.org',
        link: 'service@bfchain.org'
      }
    ]
  }
]
const IMG_BASE = '/.vitepress/theme/components/imgs';
const logos = [
  {
    name: 'Github',
    img_url: `${IMG_BASE}/icon_github.png`
  },
  {
    name: 'Twitter',
    img_url: `${IMG_BASE}/icon_twitter.png`
  },
  {
    name: 'weixin',
    img_url: `${IMG_BASE}/icon_weibo.png`
  },
  {
    name: 'weibo',
    img_url: `${IMG_BASE}/icon_weixin.png`
  }
]
export default {
  data () {
    return {
      footerContent: footerContent,
      logos: logos
    }
  }
}
</script>
<style scoped>
/* -----main global end------- */

footer {
  background-color: #4a78f7;
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
  margin: 32px 0;
  display: flex;
  justify-content: space-between;
}

.content-item-title {
  margin-bottom: 20px;
  font-size: 18px;
  font-family: PingFangSC-Semibold;
}
.list-item {
  margin-top: 12px;
  font-size: 14px;
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
