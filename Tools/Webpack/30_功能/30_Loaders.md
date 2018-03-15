

# 概述

Loaders是webpack提供的最激动人心的功能之一了。
通过使用不同的loader，webpack有能力调用外部的脚本或工具，
实现对不同格式的文件的处理，
比如说分析转换scss为css，或者把下一代的JS文件（ES6，ES7)转换为现代浏览器兼容的JS文件，
对React的开发而言，合适的Loaders可以把React的中用到的JSX文件转换为JS文件。


# 安装

Loaders需要单独安装并且需要在webpack.config.js中的modules关键字下进行配置，Loaders的配置包括以下几方面：

    test：一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
    loader：loader的名称（必须）
    include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
    query：为loaders提供额外的设置选项（可选）


