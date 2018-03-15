




# 七、获取真实的DOM节点


有时需要从组件获取真实 DOM 的节点，这时就要用到 ref 属性

需要注意的是，由于 this.refs.[refName] 属性获取的是真实 DOM ，
所以必须等到虚拟 DOM 插入文档以后，才能使用这个属性，否则会报错。

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
var MyComponent = React.createClass({
  handleClick: function() {
    this.refs.myTextInput.focus();
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick} />
      </div>
    );
  }
});
ReactDOM.render(
  <MyComponent />,
  document.getElementById('example')
);
    </script>
  </body>
</html>
```

组件 MyComponent 的子节点有一个文本输入框，用于获取用户的输入。
这时就必须获取真实的 DOM 节点，虚拟 DOM 是拿不到用户输入的。
为了做到这一点，
文本输入框必须有一个 ref 属性，然后 this.refs.[refName] 就会返回这个真实的 DOM 节点

上面代码中，通过为组件指定 Click 事件的回调函数，确保了只有等到真实 DOM 发生 Click 事件之后，才会读取 this.refs.[refName] 属性



