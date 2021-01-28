# @bfs/lib-dom-activity

## 1. 描述

​		用于注册，创建bfs页面。

## 2. 方法

- **registerActivity(lifeCycle: DomActivity.ActivityLifeCycle)**
  - **参数说明**
    - lifeCycle:  生命周期
  - **返回值**： DomActivity.Ctor
- **createAcivity(activityName: string, ActivityCtor: AC = (DomActivity as unknown) as AC)** 用于创建一个页面实例
  - **参数说明**
    - activityName: 页面名称
    - ActivityCtor: 页面构造函数
  - **返回值**： 双工通信的端口

## 3. DomAcivity 类

- **方法**
  - **open()**  打开页面
  - **close()**  关闭页面
- 属性
  - **background** 获取或设置页面背景色, 默认为"white"
  - **titleText** 获取或设置页面标题, 由createActivity方法第一个参数传入
  - **titleHeight** 获取标题高度
  - **titleVisible** 获取或设置标题可见，默认为true
  - **closeAble** 设置页面是否可被关闭，如果为true，标题栏左侧显示返回按钮；如果为false,则不显示返回按钮， 默认为true

## 4. 相关类型声明

```javascript
interface DomActivity {
    readonly $d: Document;
    open(): void;
    close(): void;
    waitForClose(): Promise<void>;
    $appendDomToBody(ele: HTMLElement): void;
    closeAble: boolean;
    background: string;
    titleText: string;
    titleHeight: number;
    titleVisible: boolean;
}
 namespace DomActivity {
    interface Ctor<A extends DomActivity = DomActivity> {
      $d: Document;
      new (name: string): A;
      prototype: A;
    }
    interface ActivityLifeCycle<A extends DomActivity = DomActivity> {
      onInit(activity: A): void;
      afterInited(activity: A): void;
    }
  }
```

## 5. 示例

```javascript
import "@bfs/bfchain-runtime-typings";
const { registerActivity } = bfsprocess.import('@bfs/lib-dom-activity');
// 注册一个页面
const HomeActivity = registerActivity({
    afterInited(domActivity) {
        // 进行页面元素构建
        divEle.innerHTML = `<h1>This is Home App!!!!!</h1>`
    	domActivity.$appendDomToBody(divEle);
    }
})
// 创建一个页面实例
const mainAc = createActivity("home", HomeActivity);
// 设置页面背景色
mainAc.background = "red";
// 设置页面标题
mainAc.titleText = "这是自定义标题";
// 设置标题是否可见
mainAc.titleVisible = true;
// 设置页面是否可关闭
mainAc.closeAble = false;
// 打开页面
mainAc.open();
// 5s后关闭页面
setTimeout(()=>{
    mainAc.close()
}, 5000)
```