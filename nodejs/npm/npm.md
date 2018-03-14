

# 概述

NPM是随同NodeJS一起安装的包管理工具，能解决NodeJS代码部署上的很多问题，常见的使用场景有以下几种：

允许用户从NPM服务器下载别人编写的第三方包到本地使用。
允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用。




# 安装

由于新版的nodejs已经集成了npm，所以之前npm也一并安装好了。同样可以通过输入 "npm -v" 来测试是否成功安装。命令如下，出现版本提示表示安装成功:

$ npm -v
2.3.0
如果你安装的是旧版本的 npm，可以很容易得通过 npm 命令来升级，命令如下：

$ sudo npm install npm -g
/usr/local/bin/npm -> /usr/local/lib/node_modules/npm/bin/npm-cli.js
npm@2.14.2 /usr/local/lib/node_modules/npm
如果是 Window 系统使用以下命令即可：

npm install npm -g
使用淘宝镜像的命令：

cnpm install npm -g


# 安装模块

使用 npm 命令安装模块
npm 安装 Node.js 模块语法格式如下：

$ npm install <Module Name>
以下实例，我们使用 npm 命令安装常用的 Node.js web框架模块 express:

$ npm install express
安装好之后，express 包就放在了工程目录下的 node_modules 目录中，



# 全局安装与本地安装

npm 的包安装分为本地安装（local）、全局安装（global）两种，从敲的命令行来看，差别只是有没有-g而已，比如

npm install express          # 本地安装
npm install express -g   # 全局安装

本地安装

1. 将安装包放在 ./node_modules 下（运行 npm 命令时所在的目录），如果没有 node_modules 目录，会在当前执行 npm 命令的目录下生成 node_modules 目录。
2. 可以通过 require() 来引入本地安装的包。


全局安装

1. 将安装包放在 /usr/local 下或者你 node 的安装目录。
2. 可以直接在命令行里使用。
如果你希望具备两者功能，则需要在两个地方安装它或使用 npm link。


示例

```
npm install express -g

安装过程输出如下内容，第一行输出了模块的版本号及安装位置。

express@4.13.3 node_modules/express
├── escape-html@1.0.2
├── range-parser@1.0.2
├── merge-descriptors@1.0.0
├── array-flatten@1.1.1
├── cookie@0.1.3
├── utils-merge@1.0.0
├── parseurl@1.3.0
├── cookie-signature@1.0.6
├── methods@1.1.1
├── fresh@0.3.0
├── vary@1.0.1
├── path-to-regexp@0.1.7
├── content-type@1.0.1
├── etag@1.7.0
├── serve-static@1.10.0
├── content-disposition@0.5.0
├── depd@1.0.1
├── qs@4.0.0
├── finalhandler@0.4.0 (unpipe@1.0.0)
├── on-finished@2.3.0 (ee-first@1.1.1)
├── proxy-addr@1.0.8 (forwarded@0.1.0, ipaddr.js@1.0.1)
├── debug@2.2.0 (ms@0.7.1)
├── type-is@1.6.8 (media-typer@0.3.0, mime-types@2.1.6)
├── accepts@1.2.12 (negotiator@0.5.3, mime-types@2.1.6)
└── send@0.13.0 (destroy@1.0.3, statuses@1.2.1, ms@0.7.1, mime@1.3.4, http-errors@1.3.1)
```

# 查看

你可以使用以下命令来查看所有全局安装的模块：

    $ npm list -g
    
    ├─┬ cnpm@4.3.2
    │ ├── auto-correct@1.0.0
    │ ├── bagpipe@0.3.5
    │ ├── colors@1.1.2
    │ ├─┬ commander@2.9.0
    │ │ └── graceful-readlink@1.0.1
    │ ├─┬ cross-spawn@0.2.9
    │ │ └── lru-cache@2.7.3
    ……

如果要查看某个模块的版本号，可以使用命令如下：

    $ npm list grunt
    
    projectName@projectVersion /path/to/project/folder
    └── grunt@0.4.1

# package.json

  package.json 位于模块的目录下，用于定义包的属性。
  接下来让我们来看下 express 包的 package.json 文件，
  位于 node_modules/express/package.json 内容：
  
  Package.json 属性说明
  name - 包名。
  
  version - 包的版本号。
  
  description - 包的描述。
  
  homepage - 包的官网 url 。
  
  author - 包的作者姓名。
  
  contributors - 包的其他贡献者姓名。
  
  dependencies - 依赖包列表。如果依赖包没有安装，npm 会自动将依赖包安装在 node_module 目录下。
  
  repository - 包代码存放的地方的类型，可以是 git 或 svn，git 可在 Github 上。
  
  main - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。
  
  keywords - 关键字
  
# 卸载 /更新 /搜索
  
卸载模块
我们可以使用以下命令来卸载 Node.js 模块。

$ npm uninstall express
卸载后，你可以到 /node_modules/ 目录下查看包是否还存在，或者使用以下命令查看：

$ npm ls
更新模块
我们可以使用以下命令更新模块：

$ npm update express
搜索模块
使用以下来搜索模块：

$ npm search express


# 创建模块/发布

创建模块，package.json 文件是必不可少的。
我们可以使用 NPM 生成 package.json 文件，生成的文件包含了基本的结果。



# 使用淘宝 NPM 镜像

大家都知道国内直接使用 npm 的官方镜像是非常慢的，这里推荐使用淘宝 NPM 镜像。

淘宝 NPM 镜像是一个完整 npmjs.org 镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。

你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:

$ npm install -g cnpm --registry=https://registry.npm.taobao.org
这样就可以使用 cnpm 命令来安装模块了：

$ cnpm install [name]


# NPM 常用命令

除了本章介绍的部分外，NPM还提供了很多功能，package.json里也有很多其它有用的字段。

除了可以在npmjs.org/doc/查看官方文档外，这里再介绍一些NPM常用命令。

NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。

NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。

使用npm help <command>可查看某条命令的详细帮助，例如npm help install。

在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。

使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。

使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。

使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。

使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。

# 问题

如果出现以下错误：

npm err! Error: connect ECONNREFUSED 127.0.0.1:8087 
解决办法为：

$ npm config set proxy null

