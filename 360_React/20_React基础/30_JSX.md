
# 概述

    React 使用 JSX 来替代常规的 JavaScript。
    JSX 是一个看起来很像 XML 的 JavaScript 语法扩展。
    我们不需要一定使用 JSX，但它有以下优点：
    JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化。
    它是类型安全的，在编译过程中就能发现错误。
    使用 JSX 编写模板更加简单快速。
    

# 3 HTML 与 JavaScript 的混写


概述
    
    JSX 的语法，允许 HTML 与 JavaScript 的混写
    遇到 HTML 标签（以 < 开头），就用 HTML 规则解析；
    遇到代码块（以 { 开头），就用 JavaScript 规则解析

示例
 
```
<!DOCTYPE html>
<html>
  <head>
    <script src="../build/react.js"></script>
    <script src="../build/react-dom.js"></script>
    <script src="../build/browser.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
      var names = ['Alice', 'Emily', 'Kate'];
      ReactDOM.render(
        <div>
        {
          names.map(function (name, index) {
            return <div key={index}>Hello, {name}!</div>
          })
        }
        </div>,
        document.getElementById('example')
      );
    </script>
  </body>
</html>

``` 

# 6 变量

概述

    JSX 允许直接在模板插入 JavaScript 变量。
    变量的作用域


## 6.1 数组

概述

    JSX 允许直接在模板插入 JavaScript 变量。
    如果这个变量是一个数组，则会展开这个数组的所有成员

示例

```
<!DOCTYPE html>
<html>
  <head>
    <script src="../build/react.js"></script>
    <script src="../build/react-dom.js"></script>
    <script src="../build/browser.min.js"></script>
  </head>
  <body>
    <div id="example"></div>
    <script type="text/babel">
      var arr = [
        <h1 key="1">Hello world!</h1>,
        <h2 key="2">React is awesome</h2>,
      ];
      ReactDOM.render(
        <div>{arr}</div>,
        document.getElementById('example')
      );
    </script>
  </body>
</html>
```


    
# 样式

React 推荐使用内联样式。
我们可以使用 camelCase 语法来设置内联样式. React 会在指定元素数字后自动添加 px 。
以下实例演示了为 h1 元素添加 myStyle 内联样式：

     var myStyle = {
         fontSize: 100,
         color: '#FF0000'
     };
     ReactDOM.render(
         <h1 style = {myStyle}>菜鸟教程</h1>,
         document.getElementById('example')
     );
     
     
     
# 转换

Web 应用（以及浏览器显示的其它一切）是由 HTML、CSS 和 JavaScript 组成的著作权归作者所有。


如果不这么做，React 应用就无法运行。目前将 JSX 转换为 JavaScript 有两种解决方案：

围绕 Node 以及一些构建工具（比如 Webpack）来设置开发环境。在这种环境中，每次执行构建时，所有 JSX 被自动转换为 JS，放在磁盘上，让我们可以像标准 JavaScript 文件一样引用。
让浏览器在运行时自动将 JSX 转换为 JavaScript。我们直接像 JavaScript 一样用 JSX，浏览器负责剩下的转换。
这两种解决方案都有一席之地，我们来看看各自的影响。

第一种解决方案，虽然开始有点复杂，有点费时，但是是当今现代 Web 开发的方式。除了把 JSX 编译（更精确的说是转译）为 JS 外，这种方法允许我们利用模块、更好的构建工具，以及让创建复杂 Web 应用变得稍微可管理的很多其它特征。

第二种解决方案提供了一种快速而直接的路径，开始花更多时间写代码，更少时间花在开发环境上。要用这个解决方案，我们要做的就是引用一个脚本文件。这个脚本文件负责在页面加载时，将 JSX 转换为 JS，然后我们的 React 应用就开始活起来，这样就不需要折腾开发环境。

在 React 入门阶段，我们打算用第二种方案。那么为什么我们不一直用第二种方案呢？原因是，浏览器每次要花时间把 JSX 翻译为 JS，这对性能是有影响的。在学习如何使用 React 时，这是完全可以接受的，但是在部署应用程序实际使用时，这肯定是完全不能接受的。所以后面我们会在已经熟悉了 React 后，再用第一解决方案，即设置开发环境。
