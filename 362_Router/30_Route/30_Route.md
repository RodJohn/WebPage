
# Router

## 概述

    Router组件是一个容器，它内部可以包含Route组件。
    Route组件定义了URL路径与组件的对应关系
    path为url,component为组件

## 示例

```
import { Router, Route, hashHistory } from 'react-router';

render((
  <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/repos" component={Repos}/>
      <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'));
```

分析

    上面代码中，
    访问/repos（比如http://localhost:8080/#/repos）时，加载Repos组件；
    访问/about（http://localhost:8080/#/about）时，加载About组件。




