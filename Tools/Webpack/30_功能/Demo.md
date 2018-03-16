
# npm初始化

在上述练习文件夹中创建一个package.json文件，
这是一个标准的npm说明文件，里面蕴含了丰富的信息，包括当前项目的依赖模块，自定义的脚本任务等等。
在终端中使用npm init命令可以自动创建这个package.json文件

npm init
输入这个命令后，终端会问你一系列诸如项目名称，项目描述，作者等信息，
不过不用担心，如果你不准备在npm中发布你的模块，这些问题的答案都不重要，回车默认即可。





# 4 创建演示项目

    回到之前的空文件夹，并
    在里面创建两个文件夹,app文件夹和public文件夹，
    app文件夹用来存放原始数据和我们将写的JavaScript模块，
    public文件夹用来存放之后供浏览器读取的文件（包括使用webpack打包生成的js文件以及一个index.html文件）。
    接下来我们再创建三个文件:
    index.html --放在public文件夹中;
    Greeter.js-- 放在app文件夹中;
    main.js-- 放在app文件夹中;


## 4.2 index.html

    在index.html文件中写入最基础的html代码，目的在于引入打包后的js文件
    （这里我们先把之后打包后的js文件命名为bundle.js）。

示例

    <!-- index.html -->
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Webpack Sample Project</title>
      </head>
      <body>
        <div id='root'>
        </div>
        <script src="bundle.js"></script>
      </body>
    </html>

## 4.3 Greeter.js

    在Greeter.js中定义一个返回包含问候信息的html元素的函数,
    并依据CommonJS规范导出这个函数为一个模块：

示例

    // Greeter.js
    module.exports = function() {
      var greet = document.createElement('div');
      greet.textContent = "Hi there and greetings!";
      return greet;
    };


## 4.4 main.js

    main.js文件中把Greeter模块返回的节点插入页面。
    
示例

    //main.js 
    const greeter = require('./Greeter.js');
    document.querySelector("#root").appendChild(greeter());