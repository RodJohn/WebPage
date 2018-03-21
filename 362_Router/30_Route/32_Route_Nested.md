

# 嵌套路由

## 原理

    子组件 子路由
        React Router 使用路由嵌套的概念来让你定义 view 的嵌套集合，
        当一个给定的 URL 被调用时，整个集合中（命中的部分）都会被渲染。
    
    相对路径 绝对路径
        在多层嵌套路由中使用绝对路径的能力让我们对 URL 拥有绝对的掌控。
        我们无需在 URL 中添加更多的层级，从而可以使用更简洁的 URL。

## 示例

路由代码

    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path="repos" component={Repos}/>
        <Route path="about" component={About}>
            <Route path="messages" component={Message} />
            <Route path="/right" component={Repos}/>
        </Route>
      </Route>
    </Router>

组件代码

    App.js
    export default React.createClass({
      render() {
        return <div>
          {this.props.children}
        </div>
      }
    })
    上面代码中，
    App组件的this.props.children属性就是子组件。

分析

    用户访问/repos时，会先加载App组件，然后在它的内部再加载Repos组件。
    <App>
      <Repos/>
    </App>

效果
    
    /                   App 
    /repos              App --> Repos 
    /about              App --> About 
    /about/message      App --> About --> Message
    /right              App --> About --> Right

# IndexRoute 

## 问题

    <Router>
      <Route path="/" component={App}>
        <Route path="accounts" component={Accounts}/>
        <Route path="statements" component={Statements}/>
      </Route>
    </Router>
    
    上面代码中，访问根路径/，不会加载任何子组件。
    也就是说，App组件的this.props.children，这时是undefined。
    因此，通常会采用{this.props.children || <Home/>}这样的写法。
    这时，Home明明是Accounts和Statements的同级组件，却没有写在Route中。

## 默认子组件

    IndexRoute显式指定Home是根路由的子组件，即指定默认情况下加载的子组件。
    IndexRoute组件没有路径参数path。

## 示例

代码

    <Router>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="accounts" component={Accounts}/>
        <Route path="statements" component={Statements}/>
      </Route>
    </Router>

分析

    现在，用户访问/的时候，加载的组件结构如下。
    <App>
      <Home/>
    </App>
    这种组件结构就很清晰了：App只包含下级组件的共有元素，本身的展示内容则由Home组件定义。



