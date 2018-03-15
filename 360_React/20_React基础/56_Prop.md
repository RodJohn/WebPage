


# 使用 Props

```
var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});
 
ReactDOM.render(
  <HelloMessage name="Runoob" />,
  document.getElementById('example')
```


实例中 name 属性通过 this.props.name 来获取。

# 传递

当一个组件依赖父组件中的数据时，就需要用 props 来传递数据了。

```
class Father extends React.Component {
  render () {
    return (
      <div>
        {/* ... */}
        <Child author="HUnter" />
      </div>
    )
  }
}
class Child extends React.Component {
  render () {
    return (
      <div>
        <p>{this.props.author}</p>
      </div>
    )
  }
}


子组件中通过 this.props 就可以拿到 props 上的数据了，实现了从 父组件 ------> 子组件的数据传递。
另外再提及一下 this.props.children：


class Father extends React.Component {
  render () {
    return (
      <div>
        {/* ... */}
        <Child author="HUnter">
          <h1>hello world</h1>
        </Child>
      </div>
    )
  }
}
class Child extends React.Component {
  render () {
    return (
      <div>
        <p>{this.props.author}</p>
        {this.props.children}
        {/* 相当于<h1>hello world</h1> */}
      </div>
    )
  }
}

也就是说 this.props.children 就是组件内嵌套的元素。

```

# this.props.children

this.props.children 属性。它表示组件的所有子节点

this.props.children 的值有三种可能：
如果当前组件没有子节点，它就是 undefined ;
如果有一个子节点，数据类型是 object ；
如果有多个子节点，数据类型就是 array


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
      var NotesList = React.createClass({
        render: function() {
          return (
            <ol>
              {
                React.Children.map(this.props.children, function (child) {
                  return <li>{child}</li>;
                })
              }
            </ol>
          );
        }
      });
      ReactDOM.render(
        <NotesList>
          <span>hello</span>
          <span>world</span>
        </NotesList>,
        document.getElementById('example')
      );
    </script>
  </body>
</html>
```

上面代码的 NoteList 组件有两个 span 子节点，它们都可以通过 this.props.children 读取


# PropTypes

组件的属性可以接受任意值，字符串、对象、函数等等都可以。有时，我们需要一种机制，验证别人使用组件时，提供的参数是否符合要求。

组件类的PropTypes属性，就是用来验证组件实例的属性是否符合要求

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
      var data = 123;
      var MyTitle = React.createClass({
        propTypes: {
          title: React.PropTypes.string.isRequired,
        },
        render: function() {
          return <h1> {this.props.title} </h1>;
        }
      });
      ReactDOM.render(
        <MyTitle title={data} />,
        document.getElementById('example')
      );
    </script>
  </body>
</html>

```

Mytitle组件有一个title属性。
PropTypes 告诉 React，这个 title 属性是必须的，而且它的值必须是字符串


#  getDefaultProps


getDefaultProps 方法可以用来设置组件属性的默认值。


```
var MyTitle = React.createClass({
  getDefaultProps : function () {
    return {
      title : 'Hello World'
    };
  },

  render: function() {
     return <h1> {this.props.title} </h1>;
   }
});

ReactDOM.render(
  <MyTitle />,
  document.body
);
```


