# **BFS开发者基础教程**
## **1. BFS 概述**

- ### BFS是什么？

    BFS，全称为Bioforest Chain System，Bioforest实为Biology Forest的合称，BFS意为生物链林系统。它是厦门本能实验室自主研发的基于区块链技术的可供二次开发的底层系统，开发者可以在其上开发基于区块链的各类应用，随着应用的不断开发，构建出越来越庞大和完善的区块链生态系统，犹如森林中的树木一样不断生长。

- ### BFS可以用来做什么？

    BFS是可以提供服务接口的底层系统，开发者可以基于BFS开放的API接口来实现相应功能的应用，犹如小程序之与微信客户端的关系。

- ### 名词解释
    - **TUI是什么？**
        TUI是一个命令行界面，用于与BFS系统进行交互，可以类比windows上的cmd终端，linux shell,可以通过该终端调用BFS系统功能，也可通过BFS暴露的接口进行自定义指令，并按照指定的协议控制TUI状态，从而实现同BFS交互（详见BFS-TUI通信协议说明）。

## **2. 快速开始**

- ### 下载 BFS SDK 
    [待补充]
    
- ### 运行 BFS SDK
    [待补充]
    
- ### 创建工程
    详见4.示例
    
- ### 开发应用
    详见4.示例
    
- ### 编译/运行应用
    [待补充]
    
- ### 发布应用
    [待补充]

## **3. 工程文件目录结构说明**
- ### 工程文件的规则


- ### 工程文件目录结构

```
├─project               [工程根目录]
│ ├─bundle              [工程配套的-静态注册信息模块目录]
│ │ ├─src               [工程配套的-静态注册信息源文件目录]
│ │ │ └─index.ts        [工程配套的-静态注册信息文件]
│ │ ├─typings           [工程配套的-静态注册信息类型申明目录]
│ │ │ ├─src             [工程配套的-静态注册信息类型申明源目录]
│ │ │ │ ├─@types.ts     [工程配套的-静态注册信息类型声明文件]
│ │ │ │ └─index.ts      [工程配套的-静态注册信息类型声明入口文件]
│ │ | └─bfsp.json       [工程配套的-静态注册信息类型声明工程配置文件]
│ │ └─bfsp.json         [工程配套的-静态注册信息模块的工程信息说明文件]
│ ├─src                 [工程的源文件目录]
│ | ├─index.ts          [/]
│ | └─main.ts           [工程的入口文件]
│ ├─typings             [工程配套的-工程的类型声明目录]
│ | ├─src               [工程配套的-工程的类型声明源目录]
│ | | ├─@types.ts       [工程配套的-工程类型声明文件]
│ | | └─index.ts        [工程配套的-工程类型申明的入口文件]
│ | └─bfsp.json         [工程配套的-工程类型申明的配置文件]
│ └─bfsp.json           [工程的配置文件]
```



## **4. 示例**

- ### ① 创建一般性应用
    - project/bundle/src/index.ts 文件
        ```javascript
        // 导入核心模块
        import * as bfs from "@bfs/core";
        // 引入 自定义类型文件
        import "packagename-typings";

        // 导入构建应用静态数据的方法
        export function packagenameAppBuilder() {
            const app = bfs.appBundle(uid<string>, appName<string>, version<number>, {
                // 当前应用支持的协议类型名称
                // 可以是多个
                supportMimes: ["mime"],
            });

            const runner: BFS.Exec.Runner = new bfs.Resource(
                {
                    // 导入程序测执行体
                    // 'path/filename.js' 是 project/src/main.ts文件编译出来的结果
                    main: `importScripts('path/filename.js')` ,
                },

                // 资源名称,
                "bfchainv3-resc",
                
                // 资源类型
                "bfs/exec"
            );

            return { app, runner };
        }

        ```

    - project/bundle/typings/src/@types.ts 文件
        ```javascript
        // 声明类型
        declare namespace TypeName{
    
        }
    
        ```
        
    - project/bundle/typings/src/index.ts 文件
        ```javascript
        // 导入其他模块的typings
        import "other/typings";
        import "./@types";
        ```
    
    - project/bundle/typings/bfsp.json 文件
    
        ```javascript
        {
            "name": "packagename-bundle-typings",
            "version": "0.0.0",
            "vars": {},
            "source": {
                "mainFilename": "index.ts",
                "dirName": "src"
            },
            "projects": [],
            "dependencies": [],
            "plugins": {
            	"bdkTsc": {
                	"target": ["cjs", "esm", "esm-es5"]
             	}
            }
        }
        ```
    
        
    
    - project/bundle/bfsp.json 文件
    
      ```javascript
      {
              "name": "packagename-bundle",
              "version": "0.0.0",
              "vars": {},
              "source": {
                  "mainFilename": "index.ts",
                  "dirName": "src"
              },
              "projects": ["./typings"],
              "dependencies": [],
              "plugins": {
                  "bdkTsc": {
                  "target": ["cjs", "esm", "esm-es5"]
                  }
              }
          }s
      ```
    
    - project/src/index.ts 文件
        ```
        // 暂时没使用
        ```
    
    - project/src/main.ts 文件
    
        ```javascript
        // 导入运行时
        import "@bfs/bfchain-runtime-typings";
            
        
        // 网关 条件匹配后进程会询问是否举牌
        // 如果没有举牌就不会执行 bfsprocess.onLinkedBrl.attach() 部分的代码；
        bfsprocess.onGatwayBrl.attach(info => {
            //可以通过 info 来判断是否举牌
            info.offer(1)
        })
        
        // 举牌后 如果进程选中了执行当前应用就会执行下面的回调
        bfsprocess.onLinkedBrl.attach((linked) =>{
            // 可以通过 linked 判断是否执行程序
            const { createActivity } = bfsprocess.import("@bfs/lib-dom-activity");
            const { registerActivity } = bfsprocess.import("@bfs/lib-dom-activity");
            const afterInited = (tuiActivity: BFS.Lib.DomActivity) => {
        
                // 程序的执行体……
                // 载入其他的 WEB 应用
                const DOMIframe = tuiActivity.$d.createElement("iframe");
                DOMIframe.style.width = "100%";
                DOMIframe.style.height = "100%";
                DOMIframe.src = new URL("./index.html", location.origin).href;
                tuiActivity.$appendDomToBody(DOMIframe);
            }
            const mainAc = createActivity("appname", registerActivity({afterInited}));
            mainAc.open();
        })
        
        ```
    
    - project/typings/src/@types.ts 文件
    
      ```javascript
      // 声明类型
      declare namespace TypeName{
      
      }
      ```
    
      
    
    - project/typings/src/index.ts 文件
    
      ```javascript
      // 导入其他模块的typings
      import "other/typings";
      import "./@types";
      ```
    
      
    
    - project/typings/bfsp.json 文件
    
      ```javascript
      {
          "name": "packagename-typings",
          "version": "0.0.0",
          "vars": {},
          "source": {
              "dirName": "src",
              "mainFilename": "index.ts"
          },
          "projects": [],
          "dependencies": [],
          "plugins": {
              "bdkTsc": {
              	"target": ["cjs", "esm", "esm-es5"]
              }
          }
      }
      ```
    
      
    
    - project/bfsp.json 文件
    
      ```javascript
      {
          "name": "packagename",
          "version": "0.0.0",
          "vars": {},
          "source": {
              "dirName": "src",
              "mainFilename": "index.ts"
           },
           "projects": ["bundle", "./typings"],
           "dependencies": ["@bfs/bfchain-runtime-typings"],
           "plugins": {
               "bdkTsc": {
                   "target": ["cjs", "esm", "esm-es5"]
               },
               "rollup": {
                   "sourceInputFile": "main.ts",
                   "rollupProfileOptions": {
                       "jsRuntime": "web"
                   },
                   "outputs": [
                       {
                           "externalLiveBindings": false,
                           "preferConst": true,
                           "file": "path/filename.js",
                           "name": "name",
                           "format": "iife"
                       }
                   ]
               }
           }
      }
      ```
    
      
    
- ### ② 创建指令应用

    - project/bundle/src/index.ts 文件
        ```javascript
        import * as bfs from "@bfs/core";
        import "packagename-typings";

        export function commandsAppBuilder() {
            const app = bfs.appBundle("cli.tui.core.commands.org", "Core", 1, {
                supportMimes: ["core"],
                shared: {
                    // 静态注册comamndMime 和 command 元数据
                    // shared.commands 是标准表示内部的数据对象是指令类型的数据
                    commands:{
                        // core 理解为指令类型 
                        // ["help", "install", "open"] === command 下面全部包函的指令集
                        // 用法:
                        // > core help
                        // > core install
                        // > core open test://home.org           
                        core:  ["help", "install", "open"]
                    }
                }
            });
            const runner: BFS.Exec.Runner = new bfs.Resource(
                {
                    main: `importScripts('../../bfchain/commands.js')`,
                },
                "bfchainv3-resc",
        "bfs/exec"
            );
        
            return { app, runner };
        }
        ```
        
    - project/bundle/typings/src/@types.ts 文件
        ```javascript
        // 声明类型
        declare namespace TypeName{

        }
        ```
        
    - project/bundle/typings/src/index.ts 文件
    
        ```javascript
        // 导入其他模块的typings
        import "other/typings";
        import "./@types";
        ```
    
        
    
    - project/bundle/typings/bfsp.json 文件
        ```javascript
        {
            "name": "packagename-typings",
            "version": "0.0.0",
            "vars": {},
            "source": {
                "dirName": "src",
                "mainFilename": "index.ts"
            },
            "projects": [],
            "dependencies": [],
            "plugins": {
                "bdkTsc": {
                "target": ["cjs", "esm", "esm-es5"]
                }
            }
        }       
        ```
    
    - project/bundle/bfsp.json 文件
        ```javascript
        {
            "name": "packagename",
            "version": "0.0.0",
            "vars": {},
            "source": {
                "dirName": "src",
                "mainFilename": "index.ts"
            },
            "projects": ["bundle", "./typings"],
            "dependencies": ["@bfs/bfchain-runtime-typings"],
            "plugins": {
                "bdkTsc": {
                    "target": ["cjs", "esm", "esm-es5"]
                },
                "rollup": {
                    "sourceInputFile": "main.ts",
                    "rollupProfileOptions": {
                        "jsRuntime": "web"
                    },
                    "outputs": [
                        {
                            "externalLiveBindings": false,
                            "preferConst": true,
                            "file": "path/filename.js",
                            "name": "name",
                            "format": "iife"
                        }
                    ]
                }
        	}
        }
        ```
    
    - project/src/index.ts 文件
        ```javascript
        // 暂时可为空
        ```
    
    - project/src/main.ts 文件
        ```javascript
        import "@bfs/bfchain-runtime-typings";
        const bfs = bfsprocess.import('bfs');
        const register = bfs.getRegister("cli.tui.org")
        const BTPTools = bfs.BTPTools;
        register('core', 'help', (commandID: number, send: {(responseMessage: string):void}, params?: string) => {
            // 执行指令体 
            // 通过 send 向 Tui 发送消息 
            send(BTPTools.createResMessageNormal("The first message", commandID, 0))
            // 通知Tui停止接收消息，当前指令执行完毕
            send(BTPTools.createEntryInputStateNormalProtocol(commandID)) /** 会同时关闭 tui 接受消息 */
        })
        ```
    
    - project/typings/src/@types.ts 文件
        ```javascript
        // 声明类型
        declare namespace TypeName{
        
        }
        ```
    
    - project/typings/src/index.ts 文件
        ```javascript
        // 导入其他模块的typings
        import "other/typings";
        import "./@types";
        ```
    
    - project/typings/bfsp.json 文件
       ```javascript
       {
            "name": "packagename-typings",
            "version": "0.0.0",
            "vars": {},
            "source": {
                "dirName": "src",
                "mainFilename": "index.ts"
            },
            "projects": [],
            "dependencies": [],
            "plugins": {
                "bdkTsc": {
                	"target": ["cjs", "esm", "esm-es5"]
                }
            }
       }
       ```
    
    - project/bfsp.json 文件
    
      ```javascript
      {
              "name": "packagename",
              "version": "0.0.0",
              "vars": {},
              "source": {
                  "dirName": "src",
                  "mainFilename": "index.ts"
              },
              "projects": ["bundle", "./typings"],
              "dependencies": ["@bfs/bfchain-runtime-typings"],
              "plugins": {
                  "bdkTsc": {
                      "target": ["cjs", "esm", "esm-es5"]
                  },
                  "rollup": {
                      "sourceInputFile": "main.ts",
                      "rollupProfileOptions": {
                          "jsRuntime": "web"
                      },
                      "outputs": [
                          {
                              "externalLiveBindings": false,
                              "preferConst": true,
                              "file": "path/filename.js",
                              "name": "name",
                              "format": "iife"
                          }
                      ]
                  }
              }
          }
      ```

