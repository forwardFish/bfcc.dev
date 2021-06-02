<template>
  <main class="page">
    <div class="container">
      <h1 class="title">Android系统WebView版本升级</h1>
      <div class="content">
        <h3>
        请在手机浏览器打开以下地址，选择合适的版本下载升级
        </h3>
        <p>
          <a href="https://apkbog.com/en/apk/android-system-webview" target="_blank" rel="noopener noreferrer">https://apkbog.com/en/apk/android-system-webview</a>
        </p>
      </div>
      
    </div>
  </main>
</template>


<style scoped>
.page{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding-top:12rem;
  text-align:center;
}
.title{
  color: rgba(0,0,0,.7);
}
.content{
  margin-top: 3rem;
  color: rgba(0,0,0,.4);
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
