<template>
  <block-carousel class="top-carsousel" :slides="slideItems" />
  <div class="content">
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
       
        <div class="run-way-item way-windows">
          <div class="name">
            <div class="icon icon-windows"></div>
            <div class="name-text">Windows环境运行PC全节点</div>
          </div>
          <div class="run-desc">
            通过教程指南，快速搭建BFChain PC全节点所需的Windows环境，并成功在您的本地运行该节点。
          </div>
          <a href="/guide/pc/windows/index.html">
            <button class="action">现在去试</button>
          </a>
        </div>
         <div class="run-way-item way-linux">
          <div class="name">
            <div class="icon icon-linux"></div>
            <div class="name-text">Linux环境运行PC全节点</div>
          </div>
          <div class="run-desc">
            通过教程指南，快速搭建BFChain PC全节点所需的Linux环境，并成功在您的本地运行该节点。
          </div>
          <a href="/guide/pc/linux/index.html">
            <button class="action">现在去试</button>
          </a>
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
    <div class="build-chain">
      <div class="title-section">
        <div class="title">构建一条区块链</div>
        <div class="sub-title">步骤概览</div>
      </div>
      
      <div class="build-chain-steps-section">
        <div class="step_line build_chain_step_line1">
          <div class="build_chain_step" v-for="build_chain_step in build_chain_steps_line1" :key="build_chain_step">
            <div class="step-img">
              <img v-if="build_chain_step.img" :src="build_chain_step.img" :alt="'步骤'+build_chain_step.index">
            </div>
            <div class="step-name">
              {{build_chain_step.name}}
            </div>
            <!-- <div class="step-name-en">
                {{build_chain_step.en}}
              </div> -->
            <div class="step-desc">{{build_chain_step.desc}}</div>
            <!-- <div class="step-index">0{{build_chain_step.index}}</div> -->
          </div>
        </div>
        <div class="step_line build_chain_step_line2">
          <div class="build_chain_step" v-for="build_chain_step in build_chain_steps_line2" :key="build_chain_step">
            <div class="step-img">
              <img v-if="build_chain_step.img" :src="build_chain_step.img" :alt="'步骤'+build_chain_step.index">
            </div>
            <div class="step-name">
              {{build_chain_step.name}}
            </div>
            <!-- <div class="step-name-en">
                {{build_chain_step.en}}
              </div> -->
            <div class="step-desc">{{build_chain_step.desc}}</div>
            <!-- <div class="step-index">0{{build_chain_step.index}}</div> -->
          </div>
        </div>
        
      </div>
    </div>
    <div class="run-node-pc">
      <div class="title-section">
        <div class="title">运行一个PC全节点</div>
        <div class="sub-title">步骤概览</div>
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
          <a :href="guide.link" class="action-container">
            <button class="action">前往阅读</button>
          </a>
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
let t = `
构建一条区块链
步骤概览
1.BCF节点安装
通过BFChain开发者社区下载并安装对应操作系统的BCF节点软件
2.创世块申请
按照要求向指定邮箱发送您要构建的创世块申请
3.节点配置修改
申请成功后，修改节点创世块信息及节点网络环境等配置参数
4.防火墙配置
根据部署方式(公有链/私有链/联盟链)配置防火墙
5.节点身份绑定
节点启动后，需要为节点绑定一个身份地址（普通地址或受托人地址）
6.节点运行
节点身份绑定后，则节点成功运行，届时节点可进行区块同步、锻造等
7.节点管理
通过命令行窗口交互的方式管理节点
`
const build_chain_steps_line1 = [
  {
    index:1,
    name:'BCF节点安装',
    en:'SYSTEM',
    desc:'通过BFChain开发者社区下载并安装对应操作系统的BCF节点软件',
    img:`${IMG_BASE}/build_step_01.png`
  },
  {
    index:2,
    name:'创世块申请',
    en:'INSTALL',
    desc:'按照要求向指定邮箱发送您要构建的创世块申请',
    img:`${IMG_BASE}/build_step_02.png`
  },
  {
    index:3,
    name:'节点配置修改',
    en:'MODIFICATION',
    desc:'申请成功后，修改节点创世块信息及节点网络环境等配置参数',
    img:`${IMG_BASE}/build_step_03.png`
  },
  {
    index:4,
    name:'防火墙配置',
    en:'NODE',
    desc:'根据部署方式(公有链/私有链/联盟链)配置防火墙',
    img:`${IMG_BASE}/build_step_04.png`
  },
]

const build_chain_steps_line2 = [

  {
    index:5,
    name:'节点身份绑定',
    en:'NODE',
    desc:'节点启动后，需要为节点绑定一个身份地址（普通地址或受托人地址）',
    img:`${IMG_BASE}/build_step_05.png`
  },
  {
    index:6,
    name:'节点运行',
    en:'OPERATION',
    desc:'节点身份绑定后，则节点成功运行，届时节点可进行区块同步、锻造等',
    img:`${IMG_BASE}/build_step_06.png`
  },
  {
    index:7,
    name:'节点管理',
    en:'MANAGEMENT',
    desc:'通过命令行或者节点管理器(若加入BFChain网络)管理节点',
    img:`${IMG_BASE}/build_step_07.png`
  },
  {
    // index:7,
    // name:'节点管理',
    // en:'MANAGEMENT',
    // desc:'通过命令行或者节点管理器(若加入BFChain网络)管理节点',
    // img:`${IMG_BASE}/build_step_07.png`
  }
]

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
    desc:'区块锻造者，即矿工，负责BFChain网络的区块锻造。BFChain网络将在当前轮时通过链上投票治理的方式选举出下一轮的57位区块锻造者。'
  },
  {
    name:'如何参与链上投票治理',
    desc:`投票治理是BFChain网络为链上所有节点提供的参与链上治理的一种方式。节点参与链上投票治理，就有机会获得一定的权益奖励。`
  },
  {
    name:'如何管理节点',
    desc:'用户可以通过命令窗口或者节点管理器管理节点，包括但不限于：节点状态管理、节点区块同步、节点锻造信息、节点更新及重启等等'
  },
  {
    name:'如何获得链上激励',
    desc:`节点参与链上治理后就有机会获得权益奖励。
          奖励包括：
          1.区块锻造奖励
          2.链上投票治理奖励`
  },
  {
    link:'/guide/pc/windows/faq.html',
    name:'常见问题',
    desc:'一些常见问题的汇总，在这里您可以找到一些问题的解决方法。'
  },
  {
    link:'/guide/pc/windows/glossary.html',
    name:'词汇表',
    desc:'BFChain生态名词释义。'
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
.build-chain,.run-node-pc,.quick-guide{
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
.build-chain-steps-section{
  display: flex;
  flex-direction: column;
}

.step_line{
  display: flex;
  justify-content: space-between;
}

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

.build_chain_step{
  width: 248px;
  height: 180px;
  overflow: hidden;
}
.build_chain_step .step-img{
  position: absolute;
}

.build_chain_step .step-name{
  margin: 24px;
  margin-bottom: 12px;
}

.build_chain_step .step-desc{
  padding-left: 24px;
  padding-right: 50px;
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

/* .step-index{    
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
} */

/**run-ways begin**/
.try-section{
  /* margin-top: 36px; */
}
.run-way-item,.guide,.step{
  display: flex;
  flex-direction: column;
  width: 32.5%;
  max-height: 260px;
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

.guides-section, .steps-section{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.guide{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
