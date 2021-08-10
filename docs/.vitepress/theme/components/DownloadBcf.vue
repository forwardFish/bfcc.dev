<template>
  <block-carousel2 class="top-carsousel" :slides="slideItems" />
  <main class="content-center">
    <div class="section">
      <img class="bg" :src="bg1" />
      <div class="text">
        <h2>BFChain 数据中心版(公有链)</h2>
        <h3>BCF 节点软件</h3>
        <p>
          全节点数据，安装即可参与链上治理，成为区块锻造者即刻加入BFChain公有链网络
        </p>
        <div class="balance-color-box"></div>
      </div>
    </div>
    <div class="section alt">
      <img class="bg" :src="bg2" />
      <div class="text">
        <h2>BFChain私有数据版(私有链)</h2>
        <h3>BCF 节点软件</h3>
        <p>
          专属个人或企业的隐私数据保护 为个人或企业内部构建私有可信网络
        </p>
        <div class="balance-color-box"></div>
      </div>
    </div>
    <div class="section">
      <img class="bg" :src="bg3" />
      <div class="text">
        <h2>BFChain可信数据版(联盟链)</h2>
        <h3>BCF 节点软件</h3>
        <p>
          数据存证、数据交互与共享 为组织/企业之间构建信用联盟
        </p>
        <div class="balance-color-box"></div>
      </div>
    </div>
    <h1>BCF节点软件下载</h1>
    <h4>BFChain数据中心版(公有链) - BCF节点软件(V 3.6.60)</h4>
    <table>
      <tr>
        <th width="256px">操作系统</th>
        <th width="256px">下载</th>
        <th width="312px">SHA256</th>
        <th>历史版本</th>
      </tr>
      <tr>
        <td>Linux (CentOS)</td>
        <td><a href="#">mainnet-3.6.60-auth-linuxfull</a></td>
        <td>
          1234567aj7ae00c2783e4a5ab6b00a09 846de8fa37c549f196bd2e8b4f47bd23
        </td>
        <td><a href="#">查看所有版本</a></td>
      </tr>
      <tr>
        <td>Windows</td>
        <td><a href="#">mainnet-3.6.60-auth-windowsfull</a></td>
        <td>
          1234567aj7ae00c2783e4a5ab6b00a09 846de8fa37c549f196bd2e8b4f47bd23
        </td>
        <td><a href="#">查看所有版本</a></td>
      </tr>
    </table>
    <h4>BFChain数据中心版(公有链) - 区块链数据包</h4>
    <table>
      <tr>
        <th width="256px">数据包最新区块高度</th>
        <th width="256px">下载</th>
        <th width="312px">SHA256</th>
        <th>大小</th>
      </tr>
      <tr>
        <td>228888</td>
        <td><a href="#">Chaindata-228888</a></td>
        <td>
          1234567aj7ae00c2783e4a5ab6b00a09 846de8fa37c549f196bd2e8b4f47bd23
        </td>
        <td>200G</td>
      </tr>
    </table>
    <h4>BFChain私有数据版(私有链) - BCF节点软件(V 3.6.60)</h4>
    <table>
      <tr>
        <th width="256px">操作系统</th>
        <th width="256px">下载</th>
        <th width="312px">SHA256</th>
        <th>历史版本</th>
      </tr>
      <tr>
        <td>Linux (CentOS)</td>
        <td><a href="#">mainnet-3.6.60-auth-linuxfull</a></td>
        <td>
          1234567aj7ae00c2783e4a5ab6b00a09 846de8fa37c549f196bd2e8b4f47bd23
        </td>
        <td><a href="#">查看所有版本</a></td>
      </tr>
      <tr>
        <td>Windows</td>
        <td><a href="#">mainnet-3.6.60-auth-windowsfull</a></td>
        <td>
          1234567aj7ae00c2783e4a5ab6b00a09 846de8fa37c549f196bd2e8b4f47bd23
        </td>
        <td><a href="#">查看所有版本</a></td>
      </tr>
    </table>
    <h4>BFChain可信数据版(联盟链) - BCF节点软件(V 3.6.60)</h4>
    <table>
      <tr>
        <th width="256px">操作系统</th>
        <th width="256px">下载</th>
        <th width="312px">SHA256</th>
        <th>历史版本</th>
      </tr>
      <tr>
        <td>Linux (CentOS)</td>
        <td><a href="#">mainnet-3.6.60-auth-linuxfull</a></td>
        <td>
          1234567aj7ae00c2783e4a5ab6b00a09 846de8fa37c549f196bd2e8b4f47bd23
        </td>
        <td><a href="#">查看所有版本</a></td>
      </tr>
      <tr>
        <td>Windows</td>
        <td><a href="#">mainnet-3.6.60-auth-windowsfull</a></td>
        <td>
          1234567aj7ae00c2783e4a5ab6b00a09 846de8fa37c549f196bd2e8b4f47bd23
        </td>
        <td><a href="#">查看所有版本</a></td>
      </tr>
    </table>
  </main>
  <block-footer />
</template>

<script setup lang="ts">
import BlockCarousel2 from './block/carousel2.vue'
import BlockFooter from './block/footer.vue'
import bg1 from './imgs/download-bg1.png'
import bg2 from './imgs/download-bg2.png'
import bg3 from './imgs/download-bg3.png'
import homeBannerImg1 from './banners/home1.png'
const slideItems = [
  { img: homeBannerImg1, href: '#1', content: 'BFChain生物链林节点软件-BCF' }
]
</script>
<style scoped>
.content-center {
  padding-top: 80px;
  padding-bottom: 50px;
}
.section {
  display: block;
  position: relative;
  height: 480px;
  width: 100%;
  padding-top: 100px;
}
h2,
h3 {
  margin: 0;
  border-bottom: 0;
  font-size: 30px;
}
h3 {
  margin-bottom: 28px;
}
.bg {
  max-width: 1440px;
  position: absolute;
  right: -208px;
  width: 1440px;
  height: 480px;
  top: -70px;
}
.text {
  width: 400px;
}
.text p {
  width: 380px;
  font-size: 16px;
}
.balance-color-box {
  background: #4a78f7;
  width: 32px;
  height: 10px;
  margin-top: 98px;
}
.alt .text {
  margin-left: 600px;
}
.alt .balance-color-box {
  margin-right: 0;
  float: right;
}
h1 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 40px;
}
h4 {
  font-size: 16px;
  margin-bottom: 16px;
}
table {
  display: table;
  width: 100%;
  margin-bottom: 30px;
}
th {
  background: #4a78f7;
  color: #fff;
}
td {
  text-align: center;
  font-size: 14px;
}
</style>
