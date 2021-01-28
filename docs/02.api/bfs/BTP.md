# BFS-TUI 数据传输协议[BTP]

## 基础说明

### 协议作用
用于BFS告知TUI以何种方式显示内容，以及TUI告知BFS执行何种指令。

### 报文说明

#### 字符集:
- **utf8**

#### 基础格式
```javascript
dataHeader - dataBody - dataEnd
```
- `dataHeader` 头部信息
- `dataBody` 数据主体
- `dataEnd` 数据尾部信息
- 之间采用 `\r\n\r\n` 分隔

    
##### `dataHeader` 说明:
- 用来说明报文的 meta 数据
- 首行 `COMMANDER BTP/1.0.0` 用来定义当前报文是一个 `commander` 指令; 报文采用 `BTP/1.0.0` 标准;
- 后面跟随其他头部信息
    - 其他头部信息：
        - content-type  数据主体格式； 可能的值 `application/json` |  `text/plain` | `text/html` [初始阶段支持 application/json]
        - charset 数据主体采用的字符集； 可能的值 `utf8`
        - method 操作方法 可能的值 `commander` | `post`
            - `commander` 指令调用
            - `post` 传递数据
            - method 从render 发送消息的时候需要使用/ render 接受消息的时候可以不需要

##### `dataBody` 说明：
- 用来传递的数据主体部分
- 数据主体 以 JSON 格式为标准
```javascript
{
    // 类型
    type: "input" | "res",

    // 关联的commandID
    mateCommandID:number

    // tui  当前状态说明
    // WATI_RES 等待指令消息返回
    // INTPUT_SINGLE_LINE 进入普通输入模式
    // INPUT_MULTI_LINE 进入多行输入模式
    // INPUT_EDIT_FILE 进入编辑文件模式 
    tuiState:  "WATI_RES" | "INTPUT_SINGLE_LINE" | "INPUT_MULTI_LINE" | "INPUT_EDIT_FILE",

    // 菜单列表 
    // tuiState === INPUT_MULTI_LINE 需要 menu 属性
    menu?: string[],

    // 需要编辑的文本内容
    // tuiState === INPUT_EDIT_file 需要body属性;
    body: string;

    // 消息主体
    body: {
        // 层级 - 左边距参考值
        level: number; 
        
        // 是否粗体字 
        isBlod: boolean;
        
        // 是否空格占位符 如 true === 会忽略 content 的的内容；
        isSpace: boolean;
        
        // 是否块级元素 true === 独占一行 false === 会和前后的飞块级元素同占一行;
        isBlock: boolean;
        
        // 文本颜色
        color: 'red' | 'blue' | 'grey' | 'yellow' | 'white' ;
        
        // 文本内容
        content: string | Array<Array<string>> ,

        // 定义传递过来的数据类型
        type: 'string' | 'arrayT' ;
    }
}

```

##### `dataEnd` 数据的尾部信息：
- 用来说明当前报文是一个独立完整，还是只是一个局部数据; 可能的值 `--------end` | `--------inc`
- `--------end` === 当前 `dataBody` 是一个完整的数据；
- `--------inc` === 当前 `dataBody` 是一个局部数据；



## 实例说明：
### 报文实例：
-原始格式：  `COMMANDER\0BTP/1.0.0\r\ncontent-type:application/json\r\ncharset:utf8\r\n\r\n{\r\n"type": "res",\r\n"body":{\r\n"level":0,"isBlod":true\r\n}\r\n}\r\n\r\r\n--------end` 


-格式化：
```
COMMANDER BTP/1.0.0
content-type:application/json
charset:utf8
method:commander

{
    "type": "res",
    "body": {
        "level":0,
        "isBlod:true
    }
}

--------end

```

- 说明：
```
// dataHeader
// 报文协议
COMMANDER BTP/1.0.0   
// dataBody格式
content-type:application/json
// dataBody 使用的字符集
charset:utf8

// dataBody
{
    "type": "res",
    "body": {
        "level":0,
        "isBlod:true
    }
}

// dataEnd
--------end

```