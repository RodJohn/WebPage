
Mobx基于观察者模式，采用多节点管理数据，是一个很轻量、入手简单、代码耦合小的数据框架

http://git.pm.bwoilmarine.com/danielcai/react-fundamentals

看看我们IM项目

# 环境准备


Install node.js

Install yarn 
    
    npm i -g yarn

Install create-react-app

    npm i -g create-react-app  


# 创建项目

## 初始化项目

Use create-react-app to initialize a project

    create-react-app bmo-city-selector
    cd bmo-city-selector  
    
    Each of the future components name should have a bmo- prefix, connected each word by -   
    
## 添加依赖

    yarn add antd mobx mobx-react -D

    Add necessary dependencies
    antd Following the Ant Design specification, antd is a React UI library that contains a set of high quality components and demos for building rich, interactive user interfaces.
    mobx MobX is a library that makes state management simple and scalable. The philosophy behind MobX is very simple: Anything that can be derived from the application state, should be derived. Automatically. which includes the UI, data serialization, server communication, etc.
    mobx-react Package with React component wrapper for combining React with MobX.
    Add all of the above by single line command    
    
## 目录结构

```
bmo-city-selector/
    node_modules/          // Node Packages
    public/
        assets/            // Images or Other Resources
        index.html
        favicon.ico
        manifest.json
    src/
        components/        // Components
            CitySelector.js      
        stores/
            CityStore.js   // Manage App State
        index.js           // App Entrance
        main.js            // Component Entrance
    package.json           // NPM Configurations
```
## neironb




## 启动服务器

use $ yarn start to run in dev server.



    