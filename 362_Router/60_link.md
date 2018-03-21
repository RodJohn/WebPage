
# Link
Link组件用于取代<a>元素，生成一个链接，允许用户点击后跳转到另一个路由。
它基本上就是<a>元素的React 版本，可以接收Router的状态。


render() {
  return <div>
    <ul role="nav">
      <li><Link to="/about">About</Link></li>
      <li><Link to="/repos">Repos</Link></li>
    </ul>
  </div>
}

# activeStyle

如果希望当前的路由与其他路由有不同样式，这时可以使用Link组件的activeStyle属性。


<Link to="/about" activeStyle={{color: 'red'}}>About</Link>
<Link to="/repos" activeStyle={{color: 'red'}}>Repos</Link>
上面代码中，当前页面的链接会红色显示。

另一种做法是，使用activeClassName指定当前路由的Class。


<Link to="/about" activeClassName="active">About</Link>
<Link to="/repos" activeClassName="active">Repos</Link>
上面代码中，当前页面的链接的class会包含active。



# IndexLink
如果链接到根路由/，不要使用Link组件，而要使用IndexLink组件。

这是因为对于根路由来说，activeStyle和activeClassName会失效，或者说总是生效，因为/会匹配任何子路由。而IndexLink组件会使用路径的精确匹配。


<IndexLink to="/" activeClassName="active">
  Home
</IndexLink>
上面代码中，根路由只会在精确匹配时，才具有activeClassName。

另一种方法是使用Link组件的onlyActiveOnIndex属性，也能达到同样效果。


<Link to="/" activeClassName="active" onlyActiveOnIndex={true}>
  Home
</Link>
实际上，IndexLink就是对Link组件的onlyActiveOnIndex属性的包装。


