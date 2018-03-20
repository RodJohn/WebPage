
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