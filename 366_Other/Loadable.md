

# 参考

http://blog.csdn.net/abcdefhs/article/details/75020353



# 

Loadable 是分割组件级 bundle 的高阶组件


假设有两个组件，其中一个引入并渲染另一个。
目前通过 import 同步引入 AnotherComponent 这个依赖。我们需要一种可以异步加载的方式


    import AnotherComponent from './another-component';
     
    class MyComponent extends React.Component {
      render() {
        return <AnotherComponent/>;
      }
    }

# 
    
import() 失败了怎么办呢？服务端渲染呢？

这个问题可以用 Loadable 进行抽象。

Loadable 使用起来很简单，
只要传入加载组件的函数和加载组件过程中展示的“Loading”组件就可以了。


    import Loadable from 'react-loadable';
     
    function MyLoadingComponent() {
      return <div>Loading...</div>;
    }
     
    const LoadableAnotherComponent = Loadable({
      loader: () => import('./another-component'),
      LoadingComponent: MyLoadingComponent
    });
     
    class MyComponent extends React.Component {
      render() {
        return <LoadableAnotherComponent/>;
      }
    }


但是如果组件加载失败了呢？我们还需要有 error 状态。

为了给你最大的控制权，决定什么时候展示什么，error 只会简单地作为 LoadingComponent 的属性抛出。


#     