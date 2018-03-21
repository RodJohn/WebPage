

# 概述

    每个路由都有Enter和Leave钩子(事件)，
    用户进入或离开该路由时触发。
    
## 示例
    
    <Route path="about" component={About} />
    ＜Route path="inbox" component={Inbox}>
      ＜Redirect from="messages/:id" to="/messages/:id" />
    </Route>
    
    上面的代码中，如果用户离开/messages/:id，进入/about时，会依次触发以下的钩子。
    
    /messages/:id的onLeave
    /inbox的onLeave
    /about的onEnter
    
# 其他
    
    下面是一个例子，使用onEnter钩子替代<Redirect>组件。
    
    
    <Route path="inbox" component={Inbox}>
      <Route
        path="messages/:id"
        onEnter={
          ({params}, replace) => replace(`/messages/${params.id}`)
        } 
      />
    </Route>
    onEnter钩子还可以用来做认证。
    
    
    const requireAuth = (nextState, replace) => {
        if (!auth.isAdmin()) {
            // Redirect to Home page if not an Admin
            replace({ pathname: '/' })
        }
    }
    export const AdminRoutes = () => {
      return (
         <Route path="/admin" component={Admin} onEnter={requireAuth} />
      )
    }
    下面是一个高级应用，当用户离开一个路径的时候，跳出一个提示框，要求用户确认是否离开。
    
    
    const Home = withRouter(
      React.createClass({
        componentDidMount() {
          this.props.router.setRouteLeaveHook(
            this.props.route, 
            this.routerWillLeave
          )
        },
    
        routerWillLeave(nextLocation) {
          // 返回 false 会继续停留当前页面，
          // 否则，返回一个字符串，会显示给用户，让其自己决定
          if (!this.state.isSaved)
            return '确认要离开？';
        },
      })
    )
    上面代码中，setRouteLeaveHook方法为Leave钩子指定routerWillLeave函数。该方法如果返回false，将阻止路由的切换，否则就返回一个字符串，提示用户决定是否要切换。

    
    