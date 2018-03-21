

# Redirect 

## 作用

    <Redirect>组件用于路由的跳转，
    即用户访问一个路由，会自动跳转到另一个路由。

## 示例

代码

    <Route path="inbox" component={Inbox}>
      ＜Redirect from="messages/:id" to="/messages/:id" />
    </Route>

分析

    现在访问/inbox/messages/5，会自动跳转到/messages/5。




#IndexRedirect

## 作用

    IndexRedirect组件用于访问根路由的时候，将用户重定向到某个子组件。

## 示例
    
    <Route path="/" component={App}>
      ＜IndexRedirect to="/welcome" />
      <Route path="welcome" component={Welcome} />
      <Route path="about" component={About} />
    </Route>
    
    上面代码中，
    用户访问根路径时，将自动重定向到子组件welcome。