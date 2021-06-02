<template>
  <main class="page">
    <div class="container">
      <h1 class="title">Android系统WebView版本升级</h1>
      <div class="content">
        <p>使用Android 系統打开应用时，屏幕显示空白，这可能是由于Android系統WebView的不兼容问题。 请按照如下步骤操作：</p>
        <p>
          <ol>
            <li>请您在手机浏览器打开网址:
            <a href="https://apkbog.com/en/apk/android-system-webview" target="_blank" rel="noopener noreferrer">https://apkbog.com/en/apk/android-system-webview</a>
            </li>
            <li>选择适合的WebView版本，建议70以上版本</li>
            <li>下载WebView并安装</li>
            <li>重新启动手机</li>
            <li>重启手机后，打开应用，若屏幕依然显示为空白，请重新更换版本安装。</li>
          </ol>
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
}
.title{
  color: rgba(0,0,0,.7);
}
.content{
  margin-top: 3rem;
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
