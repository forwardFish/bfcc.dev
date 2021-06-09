<template>
  <main class="page">
    <div class="container">
      <div class="item" v-for="item in items" :key="item">
        <!-- <a :href="item.url" class="feature-img"
          ><img v-if="item.img" :src="item.img"
        /></a> -->
        <div class="content">
          <h2>
            <a :href="item.url">{{ item.title }}</a>
          </h2>
          <p>{{ item.content }}</p>
          <div class="flex">
            <a :href="item.url" class="more">阅读全文</a>
          </div>
        </div>
      </div>

      <div class="flex" ref="more" v-if="itemsPoll.length > 0">
        <a href="#" @click="doLoadMore" class="more">加载更多...</a>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
const limit = 10
const items = ref([])
const more = ref(null)

const itemsPoll = [
  {
    url: '/blog/21.html',
    title: `这两个特性是区块链作为价值互联网的基石`,
    content:
      '区块链具有数据不可篡改、可追溯的特性。这个特性使得区块链就像历史一样，发生了就是发生了，无法追悔，野史也无法代替正史写入人类的共识。区块链让数据归属权得到了确权，使得价值可以在互联网中传递。是什么让区块链拥有了这两大杀器呢？首先需要了解区块链的本质。'
  },
  {
    url: '/blog/20.html',
    title: '一文读懂区块链相较互联网的真正创新之处',
    img: '/blog/image/020-00.png',
    content:
      '最近关于区块链革命的提法少了很多，我们很少再听到“区块链即将颠覆互联网”的提法，这似乎也寓意着区块链技术（加密技术）正在进入一个理性发展的阶段，如果按照Gartner的技术成熟度曲线来看，区块链正在进入一个泡沫幻灭的阶段，如之前再成熟度曲线中消失的“云计算”概念一样，区块链似乎正在成为一个IT行业的基础设施。数字经济时代，本文试图对区块链（本文中将加密Crypto与区块链blockchain视作等同概念）与互联网的内在关系进行一个梳理。'
  },
  {
    url: '/blog/19.html',
    title: '公链之路，破局何方？',
    img: '/blog/image/019-02.jpg',
    content:
      '9月底，比原链（bytom）创始人兼CEO段新星辞去职务，离开了他一直看好的公链舞台。在这半个月之前，另一老牌国产公链公信宝（GXC）的运营主体因涉及非法爬虫业务遭警方查封，一时令舆论哗然。'
  },
  {
    url: '/blog/18.html',
    title: '这么多年，为什么99.9%人还没见过区块链是什么样子？',
    content:
      '比特币到现在已经十年了，而区块链作为比特币的底层技术被提出也有好几年的时间，发展到现在各种协议和技术不断出现。那么为什么到现在，99.9%的人都没见过区块链？区块链的应用落地场景也并未普及呢？'
  },
  {
    url: '/blog/17.html',
    title: '学习| 为什么密码学是区块链的核心',
    img: '/blog/image/17-01.jpg',
    content:
      '大家都知道，区块链是比特币的底层技术，但区块链技术的核心，又是什么？是密码学。密码学是区块链技术的核心。所有的交易信息都会被编码到区块里，而区块链则是由这一个个区块连接在一起而形成的结构。密码技术由来已久，主要经历了古典密码、机械密码、现代密码三个发展阶段。随着历史推进，密码技术不断在演变，密码学成为了科学。而今天我们就要一起来看看，区块链技术当中的密码学，与过去我们了解的密码学有什么不同？它的作用在哪里？'
  },
  {
    url: '/blog/16.html',
    title: '比特币不是区块链的全部，创新才是未来',
    img: '/blog/image/16-01.jpg',
    content:
      '一直以来，外界很多人把区块链和比特币混为一谈，认为比特币就是区块链，还形成了一股不小的“共识”。其实，许多人只知道比特币，鲜有听说其它加密货币的存在，一旦听到别人说着陌生的名称，第一个意识自然就是认为这是个“山寨”吧。'
  },
  {
    url: '/blog/15.html',
    title: '3个维度, 3种误解, 20大应用场景, 这才是真实的区块链!',
    img: '/blog/image/15-01.jpg',
    content:
      '”区块链+“是相对于”互联网+“而言的，就是“区块链+各个传统行业”，但这并不是简单的两者相加，而是利用区块链技术或特性，让区块链与传统行业深度融合。区块链起源于技术创新，但更重要的是，技术创新带来的模式创新和思维创新。回顾一下互联网+的历程，初始只是将传统企业互联网化、移动化，发展到现在，许多传统企业已经运用“互联网思维”创造了新的商业模式。大体上，拥抱区块链可以分为三个维度：区块链技术、区块链模式和区块链思维。'
  },
  {
    url: '/blog/14.html',
    img: '/blog/image/14-01.jpg',
    title: '从A到Z, 这份区块链术语词典据说80%的人都认不全 | 科普',
    content: `区块链是一系列先进技术的组合，因而大多数人在入门时都对那些令人摸不着头脑的术语犯了难。学习区块链和学习英语一样，往往一两个基本术语的不理解就会直接影响到你对它整体的认识，在学习英语时，老师会教你先从单词入手，在学习区块链时，你需要从基本的术语入手。`
  },
  {
    url: '/blog/09.html',
    img: '/blog/image/09-01.jpg',
    title: '为什么要了解区块链，区块链≠炒币',
    content: `提到区块链，很多人可能都有耳闻，只是每个人对区块链的了解和参与程度不一样。那为什么我们要去主动了解学习区块链，区块链和我们每个人到底未来会有什么关系？`
  },
  {
    url: '/blog/08.html',
    title: '生物链林BFChain与其他公链或手机挖矿产品的区别',
    content: `当前落地的区块链，几乎都只能在PC端或服务端运行，虽然有些有轻钱包，一定程度的解决了移动端数据查询及交易签名的问题，但是移动端并不能参与到区块链的共识机制中，不能参与共识机制将不拥有区块链的治理权。`
  },
  {
    url: '/blog/07.html',
    img: '/blog/image/07-01.gif',
    title: '分辨真假移动区块链，仅凭这一点就能pass99%的项目',
    content: `在生活中，我们会碰到这样的场景：当乘坐高铁经过隧道时，移动设备没有信号，但是此时你却急于处理一笔转账交易，怎么办？`
  },
  {
    url: '/blog/06.html',
    title: '揭秘BFChain如何破解移动端区块链三大技术难题？',
    content: `自2009年1月3日区块链第一个应用——比特币诞生以来，区块链经历了十一年的发展，目前全球都在推广区块链技术，构架价值互联网，然而，对于绝大多数人来说，只是闻其名，而并没有真正见过区块链，更别说使用过区块链了。其中最主要的原因之一是因为当下没有一款真正的移动端区块链。然而，要研发出一款真正的移动端区块链，必须要面临解决基于移动端设备的三大技术难题：移动端设备性能差，存储空间不足，以及网络不稳定。`
  },
  {
    url: '/blog/05.html',
    img: '/blog/image/05-01.jpg',
    title: 'BFChain首创的移动端点对点通信方案，到底厉害在哪？',
    content: `区块链技术打破传统互联网的诸多限制，其中一点，是P2P（peer to peer，即点对点）的通信方式。目前，区块链已经很好地应用于PC端，但在移动端还很难实现P2P的数据传输。`
  },
  {
    url: '/blog/04.html',
    title: '生物链林的技术特性和优势',
    content: `企业家要明白企业的痛点，正常的企业都会有核心的数据或一个核心账本（如传统的ERP），它的痛点就是数据不够安全，存储空间受限，对账及核算效率低等等，当下没有什么有效手段可以解决数据安全问题。 而这正是当下可在不改变其现有硬件的情况下，用生物链林的核心技术解决他们的这些问题，我们给企业提供的就是保证核心数据或账本的安全、高效，让企业的数据安全、存储不受限、记账核算高效、审计透明等，同时不会影响其它功能的正常使用，极其简单，相当于给企业换了一个永动机。 企业一旦进行资产数字化上链，就如同永动机+任意门，核心数据有安全保障，企业运营高效透明，产品销售无处不在，有无限拓展空间，让企业瞬间换赛道腾飞！`
  },
  {
    url: '/blog/03.html',
    img: '/blog/image/03-01.jpg',
    title: '生物链林BFChain的共识机制有什么独到之处？',
    content: `共识（Consensus），即达成一致的意见。自人类协作关系产生起，共识就已诞生。一个正常运转的共识机制，能够帮助一个组织进行高效的协作和分配。`
  },
  {
    url: '/blog/02.html',
    title: '生物链林BFChain在可信上的5大创新之处',
    content: `对比传统互联网，区块链技术常常被视作是解决信用问题的方案。数据不可篡改、数据的唯一性、个人信息的隐私与安全等等，都视为区块链在可信层面的共性特征。那么在这些可信共性特征的基础上，生物链林BFChain又有哪些创新与超越呢？`
  }
]

function doLoadMore () {
  const top = more.value.offsetTop - 58 * 3
  for (let i = 1; i <= limit; i++) {
    let item = itemsPoll.splice(0, 1)[0]
    item && items.value.push(item)
  }
  nextTick(() => {
    window.scrollTo({ top, behavior: 'smooth' })
  })
}

onMounted(() => {
  doLoadMore()
})
</script>

<style scoped>
.page {
  padding-top: var(--header-height);
}

.item {
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.06), 0 1px 5px rgba(0, 0, 0, 0.1);
  margin: 50px 0;
}
.item .feature-img {
  display: block;
}
.item .feature-img img {
  max-height: 500px;
  width: 100%;
  object-fit: cover;
}
.item .content {
  padding: 40px;
}
.item .content h2 {
  padding-bottom: 20px;
}
.more,
.item .content h2 a {
  color: var(--c-text);
}
.more:hover,
.item .content h2 a:hover {
  color: var(--c-brand);
  text-decoration: none;
}
.item .content h2 {
  text-align: center;
  margin-top: 0;
}
.item p {
  margin: 3em 0;
}

.flex {
  display: flex;
  justify-content: center;
}

.more {
  display: inline-block;
  border: 1px solid var(--c-text-light-2);
  padding: 0.5em 2em;
}
.more:hover {
  color: var(--c-text-light-2);
  border: 1px solid var(--c-text-light-2);
}

@media (min-width: 720px) {
  .page {
    margin-left: 16.4rem;
  }
}

@media (min-width: 960px) {
  .page {
    margin-left: 20rem;
  }
}

.container {
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  max-width: 48rem;
}

.content {
  padding-bottom: 1.5rem;
}
</style>
