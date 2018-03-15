

解析来源
http://blog.csdn.net/weiyongliang_813/article/details/74889850


https://www.imooc.com/article/17382


# 通过 npm 使用 React

    我们建议在 React 中使用 CommonJS 模块系统，比如 browserify 或 webpack，本教程使用 webpack。
    
    国内使用 npm 速度很慢，你可以使用淘宝定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:
    
    $ npm install -g cnpm --registry=https://registry.npm.taobao.org
    $ npm config set registry https://registry.npm.taobao.org
    
    这样就可以使用 cnpm 命令来安装模块了：
    
    $ cnpm install [name]



# 使用 create-react-app 快速构建 React 开发环境

create-react-app 是来自于 Facebook，通过该命令我们无需配置就能快速构建 React 开发环境。

create-react-app 自动创建的项目是基于 Webpack + ES6 。

执行以下命令创建项目：
    
    $ cnpm install -g create-react-app
    $ create-react-app my-app
    $ cd my-app/
    $ npm start

在浏览器中打开 http://localhost:3000/ 


项目的目录结构如下：

    my-app/
      README.md
      node_modules/
      package.json
      .gitignore
      public/
        favicon.ico
        index.html
      src/
        App.css
        App.js
        App.test.js
        index.css
        index.js
        logo.svg


尝试修改 src/App.js 文件代码：

    import React, { Component } from 'react';
    import logo from './logo.svg';
    import './App.css';
     
    class App extends Component {
      render() {
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>欢迎来到菜鸟教程</h2>
            </div>
            <p className="App-intro">
              你可以在 <code>src/App.js</code> 文件中修改。
            </p>
          </div>
        );
      }
    }
     
    export default App;