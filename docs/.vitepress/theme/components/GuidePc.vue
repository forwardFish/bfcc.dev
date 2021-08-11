<template>
  <block-carousel class="top-carsousel" :slides="slideItems" />
  <div class="content">
    <div class="run-node-pc">
      <div class="title-section">
        <div class="title">运行一个PC全节点</div>
        <div class="sub-title">运行六部曲</div>
      </div>
      <div class="steps-section">
        <div class="step" v-for="step in steps" :key="step">
          <div class="step-img">
            <img :src="step.img" :alt="'步骤'+step.index">
          </div>
          <div class="step-name">
            {{step.name}}
          </div>
          <div class="step-name-en">
              {{step.en}}
            </div>
          <div class="step-desc">{{step.desc}}</div>
          <div class="step-index">0{{step.index}}</div>
        </div>
      </div>
      <div class="try-section">
        <!-- <div class="run-way-item" v-for="way in run_ways" :key="way">
          <div class="name">
            <div class="icon"><img :src="way.icon" :alt="way.name"></div>
            <div class="name-text">{{way.name}}</div>
          </div>
          <div class="run-desc">
            {{way.desc}}
          </div>
        </div> -->
        <div class="run-way-item way-linux">
          <div class="name">
            <div class="icon icon-linux"></div>
            <div class="name-text">Linux环境运行PC全节点</div>
          </div>
          <div class="run-desc">
            通过教程指南，快速搭建BFChain PC全节点所需的Linux环境，并成功在您的本地运行该节点。
          </div>
          <button class="action">现在去试</button>
        </div>
        <div class="run-way-item way-windows">
          <div class="name">
            <div class="icon icon-windows"></div>
            <div class="name-text">Windows环境运行PC全节点</div>
          </div>
          <div class="run-desc">
            通过教程指南，快速搭建BFChain PC全节点所需的Windows环境，并成功在您的本地运行该节点。
          </div>
          <button class="action disabled" >即将上线</button>
        </div>
        <div class="run-way-item way-mac">
          <div class="name">
            <div class="icon icon-mac"></div>
            <div class="name-text">macOS环境运行PC全节点</div>
          </div>
          <div class="run-desc">
            通过教程指南，快速搭建BFChain PC全节点所需的macOS环境，并成功在您的本地运行该节点。
          </div>
          <button class="action disabled" >即将上线</button>
        </div>
      </div>
    </div>
    <div class="quick-guide">
      <div class="title-section">
        <div class="title">快捷向导</div>
        <div class="sub-title">QUICK GUIDE</div>
      </div>
      <div class="guides-section">
        <div class="guide" v-for="guide in guides">
          <div class="name">
            <div class="name-text">{{guide.name}}</div>
            <div class="underline"></div>
          </div>
          <div class="guide-desc">
            {{guide.desc}}
          </div>
          <button class="action" >前往阅读</button>
        </div>
      </div>
    </div>
  </div>
  <block-footer />
</template>

<script setup lang="ts">
import BlockCarousel from './block/carousel.vue'
import BlockFooter from './block/footer.vue'

import bannerImg2 from './banners/home2.png'
const slideItems = [
  {
    img: bannerImg2,
    href: '#2',
    linkText: '前往查看',
    title: 'BFChain生物链林白皮书',
    desc: '全球首款移动端共识公有链，新数字时代的通用型基础设施'
  }
]

const IMG_BASE = '/.vitepress/theme/components/imgs';
const steps = [
  {
    index:1,
    name:'系统环境部署',
    en:'SYSTEM',
    desc:'Windows/Linux/macOS系统环境搭建',
    img:`${IMG_BASE}/step_01.png`
  },
  {
    index:2,
    name:'BCF节点安装',
    en:'INSTALL',
    desc:'选择适合的部署方式（单节点/多节点、公有链/联盟链/私有链），安装BCF节点软件',
    img:`${IMG_BASE}/step_02.png`
  },
  {
    index:3,
    name:'节点配置修改',
    en:'MODIFICATION',
    desc:'修改节点创世块信息(外部创世块/BFChain)以及节点网络环境(正式/测试)等配置参数',
    img:`${IMG_BASE}/step_03.png`
  },
  {
    index:4,
    name:'节点身份绑定',
    en:'NODE',
    desc:'节点启动后，需要为节点绑定一个身份地址（普通地址或受托人地址）',
    img:`${IMG_BASE}/step_04.png`
  },
  {
    index:5,
    name:'节点运行',
    en:'OPERATION',
    desc:'节点身份绑定后，则节点成功运行，届时节点可进行区块同步、锻造等',
    img:`${IMG_BASE}/step_05.png`
  },
  {
    index:6,
    name:'节点管理',
    en:'MANAGEMENT',
    desc:'通过命令行或者节点管理器(若加入BFChain网络)管理节点',
    img:`${IMG_BASE}/step_06.png`
  },
]

const run_ways = [
  {
    name:'Linux环境运行PC全节点',
    icon:'',
    active_icon:'',
    desc:'通过教程指南，快速搭建BFChain PC全节点所需的Linux环境，并成功在您的本地运行该节点。'
  },
  {
    name:'Windows环境运行PC全节点',
    icon:'',
    active_icon:'',
    desc:'通过教程指南，快速搭建BFChain PC全节点所需的Windows环境，并成功在您的本地运行该节点。'
  },
  {
    name:'macOS环境运行PC全节点',
    icon:'',
    active_icon:'',
    desc:'通过教程指南，快速搭建BFChain PC全节点所需的macOS环境，并成功在您的本地运行该节点。'
  },
]

const guides = [
  {
    name:'如何成为区块锻造者',
    desc:'通过教程指南，快速搭建BFChain PC全节点所需的Windows环境，并成功在您的本地运行该节点。'
  },
  {
    name:'如何参与链上投票治理',
    desc:'通过教程指南，快速搭建BFChain PC全节点所需的Windows环境，并成功在您的本地运行该节点。'
  },
  {
    name:'如何管理矿机',
    desc:'通过教程指南，快速搭建BFChain PC全节点所需的Windows环境，并成功在您的本地运行该节点。'
  },
  {
    name:'如何获得链上激励',
    desc:'通过教程指南，快速搭建BFChain PC全节点所需的Windows环境，并成功在您的本地运行该节点。'
  },
  {
    name:'如何获取链上激励',
    desc:'通过教程指南，快速搭建BFChain PC全节点所需的Windows环境，并成功在您的本地运行该节点。'
  },
  {
    name:'常见问题',
    desc:'通过教程指南，快速搭建BFChain PC全节点所需的Windows环境，并成功在您的本地运行该节点。'
  },
]
</script>
<style scoped>
.content {
  margin: 80px auto;
  width: 1024px;
  max-width: 1366px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.run-node-pc,.quick-guide{
  padding: 60px 0;
}
.title-section,.steps-section,.try-section{
  display: flex;
  justify-content: space-between;
}
.title-section{
  flex-direction: column;
  justify-content: center;
  align-items:center;
}
.title{
  height: 40px;
  font-family: PingFangSC-Semibold;
  font-size: 28px;
  color: #131313;
  letter-spacing: 0;
  text-align: center;
}
.sub-title{
  height: 20px;
  margin-top: 4px;
  margin-bottom: 30px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #131313;
  text-align: center;
}

.quick-guide .sub-title{
  font-family: PingFangSC-Medium;
  color: #666666;
}


/*step section begin*/

.step{
  position: relative;
  width: 20%;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  border-right: 1px solid #e6e6e6;
  padding: 16px;
}

.step-name{
  position: relative;
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  font-weight: bold;
  color: #131313;
  margin: 8px;
}

.step-name-en{
  position: absolute;
  opacity: 0.1;
  font-family: PingFangSC-Semibold;
  font-size: 20px;
  color: #4A78F7;
  text-align: center;
  top: 47%;
  z-index: -1;
}

.step-desc{
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #131313;
  text-align: justify;
}

.step-index{    
  position: absolute;
  opacity: 0.1;
  font-family: Roboto-BlackItalic;
  font-size: 40px;
  font-style: italic;
  font-weight: bold;
  color: #4A78F7;
  text-align: center;
  right: 20px;
  bottom: 12px;
  z-index: -1;
}

/**run-ways begin**/
.try-section{
  margin-top: 36px;
}
.run-way-item,.guide{
  display: flex;
  flex-direction: column;
  width: 32.5%;
  background: #FFFFFF;
  border: 1px solid #E6E6E6;
  padding: 32px;
  padding-left: 28px;
  padding-bottom: 28px;
  margin-bottom: 10px;
  transition: all 0.7s;
}

.name{
  display: flex;
  margin-bottom: 16px;
}
.name .icon{
  width: 20px;
  height: 20px;
  background: url('./imgs/icon_linux_nor.png');
  transition: all 0.7s;
}

.way-linux:hover .icon{
  background: url('./imgs/icon_linux_hover.png');
}

.run-way-item:hover .name-text,.guide:hover .name-text{
  color:#4A78F7;
}

.run-way-item:hover,.guide:hover{
  box-shadow: 0 1px 8px 0 rgba(0,0,0,0.10);
}

.way-windows .icon{
  background: url('./imgs/icon_windows_nor.png');
}
.way-windows:hover .icon{
  background: url('./imgs/icon_windows_hover.png');
}

.way-mac .icon{
  background: url('./imgs/icon_macos_nor.png');
}
.way-mac:hover .icon{
  background: url('./imgs/icon_macos_hover.png');
}

.name-text{
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  font-weight:bold;
  color: #131313;
  margin-left: 4px;
  transition: all 0.7s;
}

.action{
  margin-top: 26px;
  cursor: pointer;
  border: 1px solid transparent;
  outline: none;
  align-self:flex-end;
  padding: 6px 12px;
  background: #4A78F7;
  color: #fff;
  border-radius: 2px;
  border-radius: 2px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #FFFFFF;
}

.disabled{
  background: #E6E6E6;
}


/**guide begin**/

.guides-section{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.guide{
  align-items: center;
  padding-bottom: 20px;
}

.guide .name{
  flex-direction: column;
  align-items: center;
}

.underline{
  width: 40px;
  height: 4px;
  background: #4A78F7;
  margin-top:16px;
}

.guide .action{
  align-self: center;
  background: #FFFFFF;
  border: 1px solid #4A78F7;
  padding: 6px 27px;
  color: #4A78F7;
}
</style>
