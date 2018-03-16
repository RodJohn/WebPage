
# 1 原理

    Webpack的工作方式是：
    把你的项目当做一个整体，通过一个给定的主文件，
    Webpack将从这个文件开始找到你的项目的所有依赖文件，
    使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。




# 3 安装webpack依赖

    npm install --save-dev webpack



# 5 执行Webpack命令

## 5.1 手动执行

webpack在终端中命令如下：

    webpack {entry file} {destination for bundled file}
    
    # {extry file}出填写入口文件的路径，本文中就是上述main.js的路径，
    # {destination for bundled file}处填写打包文件的存放路径
    # 填写路径的时候不用添加{}
    # 指定入口文件后，webpack将自动识别项目所依赖的其它文件
    
注意
    
    不过需要注意的是如果你的webpack不是全局安装的，
    那么当你在终端中使用此命令时，需要额外指定其在node_modules中的地址，
    如下命令
    node_modules/.bin/webpack  app/main.js  public/bundle.js



## 5.2 使用配置文件

配置

    在根目录下新建一个名为webpack.config.js的文件
    是一个简单的JavaScript模块，我们可以把所有的与打包相关的信息放在里面。
    其中
        entry       已多次提及的唯一入口文件
        path        打包后的文件存放的地方，取绝对路径
        filename    打包后输出文件的文件名

示例

    module.exports = {
      entry:  __dirname + "/app/main.js",
      output: {
        path: __dirname + "/public",
        filename: "bundle.js"
      }
    }
    注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。

运行

    在终端里运行webpack(非全局安装需使用node_modules/.bin/webpack)命令就可以了，
    这条命令会自动引用webpack.config.js文件中的配置选项




## 5.3 npm script

    在命令行中输入命令需要代码类似于node_modules/.bin/webpack这样的路径其实是比较烦人的，
    不过值得庆幸的是npm可以引导任务执行，对npm进行配置后可以在命令行中使用简单的npm start命令来替代上面略微繁琐的命令。

示例

    在package.json中对scripts对象进行相关设置即可。
    {
      "name": "webpack-sample-project",
      "version": "1.0.0",
      "description": "Sample webpack project",
      "scripts": {
        "start": "webpack" 
      },
      "author": "zhang",
      "license": "ISC",
      "devDependencies": {
        "webpack": "3.10.0"
      }
    }

原理

    package.json中的script会安装一定顺序寻找命令对应位置，
    本地的node_modules/.bin路径就在这个寻找清单中，
    所以无论是全局还是局部安装的Webpack，你都不需要写前面那指明详细的路径了。







