
# 概述

React Router 是建立在 history 之上的。
一个 history 知道如何去监听浏览器地址栏的变化， 
并解析这个 URL 转化为 location 对象， 然后 router 使用它匹配到路由，
最后正确地渲染对应的组件。



  Router组件的history属性，用来监听浏览器地址栏的变化，并将URL解析成一个地址对象，供 React Router 匹配。
  
  history属性，一共可以设置三种值。
  
  browserHistory
  hashHistory
  createMemoryHistory

  
# browserHistory
  
    Browser history 是使用 React Router 的应用推荐的 history。
    它使用浏览器中的 History API 用于处理 URL，
    创建一个像example.com/some/path这样真实的 URL 。
  
  import { browserHistory } from 'react-router'
  
  render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
  )
  但是，这种情况需要对服务器改造。否则用户直接向服务器请求某个子路由，会显示网页找不到的404错误。
  
  如果开发服务器使用的是webpack-dev-server，加上--history-api-fallback参数就可以了。
  
  
  $ webpack-dev-server --inline --content-base . --history-api-fallback
  createMemoryHistory主要用于服务器渲染。它创建一个内存中的history对象，不与浏览器URL互动。
  
  
  const history = createMemoryHistory(location)
  
  
# hashHistory

    如果设为hashHistory，路由将通过URL的hash部分（#）切换，URL的形式类似example.com/#/some/path。
    
    
    import { hashHistory } from 'react-router'
    
    render(
      <Router history={hashHistory} routes={routes} />,
      document.getElementById('app')
    )
    
    我应该使用 createHashHistory吗？
    Hash history 不需要服务器任何配置就可以运行，如果你刚刚入门，那就使用它吧。但是我们不推荐在实际线上环境中用到它，因为每一个 web 应用都应该渴望使用 browserHistory。
    
    像这样 ?_k=ckuvup 没用的在 URL 中是什么？
    当一个 history 通过应用程序的 push 或 replace 跳转时，它可以在新的 location 中存储 “location state” 而不显示在 URL 中，这就像是在一个 HTML 中 post 的表单数据。
    
    在 DOM API 中，这些 hash history 通过 window.location.hash = newHash 很简单地被用于跳转，且不用存储它们的location state。但我们想全部的 history 都能够使用location state，因此我们要为每一个 location 创建一个唯一的 key，并把它们的状态存储在 session storage 中。
    当访客点击“后退”和“前进”时，我们就会有一个机制去恢复这些 location state。
    
    
    