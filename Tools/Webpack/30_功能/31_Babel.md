

# 概述

Babel其实是一个编译JavaScript的平台，它可以编译代码帮你达到以下目的：

让你能使用最新的JavaScript代码（ES6，ES7...），而不用管新标准是否被当前使用的浏览器完全支持；
让你能使用基于JavaScript进行了拓展的语言，比如React的JSX；

# 安装

    Babel其实是几个模块化的包，
    其核心功能位于称为babel-core的npm包中，
    webpack可以把其不同的包整合在一起使用，
    对于每一个你需要的功能或拓展，你都需要安装单独的包（用得最多的是解析Es6的babel-env-preset包和解析JSX的babel-preset-react包）。

我们先来一次性安装这些依赖包

    // npm一次性安装多个依赖模块，模块之间用空格隔开
    npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react

配置

    module.exports = {
        entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
        output: {
            path: __dirname + "/public",//打包后的文件存放的地方
            filename: "bundle.js"//打包后输出文件的文件名
        },
        devtool: 'eval-source-map',
        devServer: {
            contentBase: "./public",//本地服务器所加载的页面所在的目录
            historyApiFallback: true,//不跳转
            inline: true//实时刷新
        },
        module: {
            rules: [
                {
                    test: /(\.jsx|\.js)$/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "env", "react"
                            ]
                        }
                    },
                    exclude: /node_modules/
                }
            ]
        }
    };


# Babel的配置

  Babel其实可以完全在 webpack.config.js 中进行配置，
  但是考虑到babel具有非常多的配置选项，
  在单一的webpack.config.js文件中进行配置往往使得这个文件显得太复杂，
  因此一些开发者支持把babel的配置选项放在一个单独的名为 ".babelrc" 的配置文件中。
  我们现在的babel的配置并不算复杂，不过之后我们会再加一些东西，
  因此现在我们就提取出相关部分，分两个配置文件进行配置（webpack会自动调用.babelrc里的babel配置选项）
  
  
    module.exports = {
        entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
        output: {
            path: __dirname + "/public",//打包后的文件存放的地方
            filename: "bundle.js"//打包后输出文件的文件名
        },
        devtool: 'eval-source-map',
        devServer: {
            contentBase: "./public",//本地服务器所加载的页面所在的目录
            historyApiFallback: true,//不跳转
            inline: true//实时刷新
        },
        module: {
            rules: [
                {
                    test: /(\.jsx|\.js)$/,
                    use: {
                        loader: "babel-loader"
                    },
                    exclude: /node_modules/
                }
            ]
        }
    };

    //.babelrc
    {
      "presets": ["react", "env"]
    }
