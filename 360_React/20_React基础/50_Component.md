# 参考

https://www.cnblogs.com/wonyun/p/5930333.html

React推出后，出于不同的原因先后出现三种定义react组件的方式，殊途同归；具体的三种方式：

函数式定义的无状态组件
es5原生方式React.createClass定义的组件
es6形式的extends React.Component定义的组件

# 1 概述

    组件并不是真实的 DOM 节点，而是存在于内存之中的一种数据结构，叫做虚拟 DOM （virtual DOM）。
    只有当它插入文档以后，才会变成真实的 DOM 。
    根据 React 的设计，所有的 DOM 变动，都先在虚拟 DOM 上发生，
    然后再将实际发生变动的部分，反映在真实 DOM上，这种算法叫做 DOM diff ，它可以极大提高网页的性能表现。

    React 允许将代码封装成组件（component），
    然后像插入普通 HTML 标签一样，在网页中插入这个组件。


# 定义


    所有组件类都必须有自己的 render 方法，用于输出组件。
    组件类的第一个字母必须大写，否则会报错
    另外，组件类只能包含一个顶层标签，否则也会报错
    

# 5 有状态定义
   

##  5.1 React.createClass 创建组件

    React.createClass`是react刚开始推荐的创建组件的方式，
    这是ES5的原生的JavaScript来实现的React组件，

### 定义方式

    var InputControlES5 = React.createClass({
        propTypes: {//定义传入props中的属性各种类型
            initialValue: React.PropTypes.string
        },
        defaultProps: { //组件默认的props对象
            initialValue: ''
        },
        // 设置 initial state
        getInitialState: function() {//组件相关的状态对象
            return {
                text: this.props.initialValue || 'placeholder'
            };
        },
        handleChange: function(event) {
            this.setState({ //this represents react component instance
                text: event.target.value
            });
        },
        render: function() {
            return (
                <div>
                    Type something:
                    <input onChange={this.handleChange} value={this.state.text} />
                </div>
            );
        }
    });
    InputControlES6.propTypes = {
        initialValue: React.PropTypes.string
    };
    InputControlES6.defaultProps = {
        initialValue: ''
    };

### 问题

    React.createClass会自绑定函数方法（不像React.Component只绑定需要关心的函数）导致不必要的性能开销，增加代码过时的可能性。
    React.createClass的mixins不够自然、直观；React.Component形式非常适合高阶组件（Higher Order Components--HOC）,它以更直观的形式展示了比mixins更强大的功能，并且HOC是纯净的JavaScript，不用担心他们会被废弃。
    HOC可以参考无状态组件(Stateless Component) 与高阶组件。


## 5.2 React.Component

    React.Component是以ES6的形式来创建react的组件的，
    是React目前极为推荐的创建有状态组件的方式，最终会取代React.createClass形式；
    相对于 React.createClass可以更好实现代码复用。


### 定义方式

    class InputControlES6 extends React.Component {
        constructor(props) {
            super(props);
    
            // 设置 initial state
            this.state = {
                text: props.initialValue || 'placeholder'
            };
    
            // ES6 类中函数必须手动绑定
            this.handleChange = this.handleChange.bind(this);
        }
    
        handleChange(event) {
            this.setState({
                text: event.target.value
            });
        }
    
        render() {
            return (
                <div>
                    Type something:
                    <input onChange={this.handleChange}
                   value={this.state.text} />
                </div>
            );
        }
    }
    InputControlES6.propTypes = {
        initialValue: React.PropTypes.string
    };
    InputControlES6.defaultProps = {
        initialValue: ''
    };


# 5 引入

可以像插入普通 HTML 标签一样，在网页中插入组件

    变量 HelloMessage 就是一个组件类。
    模板插入 <HelloMessage /> 时，会自动生成 HelloMessage 的一个实例。
    
    
    



## 5.3 特点

### 有状态性

    React.createClass和React.Component都是创建有状态的组件，
    这些组件是要被实例化的，并且可以访问组件的生命周期方法。

### 函数this自绑定

React.createClass
    
    React.createClass创建的组件，
    其每一个成员函数的this都有React自动绑定，
    任何时候使用，直接使用this.method即可，函数中的this会被正确设置。
    
    const Contacts = React.createClass({  
      handleClick() {
        console.log(this); // React Component instance
      },
      render() {
        return (
          <div onClick={this.handleClick}></div>
        );
      }
    });


React.Component

    React.Component创建的组件，其成员函数不会自动绑定this，
    需要开发者手动绑定，否则this不能获取当前组件实例对象。
    
    class Contacts extends React.Component {  
      constructor(props) {
        super(props);
      }
      handleClick() {
        console.log(this); // null
      }
      render() {
        return (
          <div onClick={this.handleClick}></div>
        );
      }
      
    当然，React.Component有三种手动绑定方法：
    可以在构造函数中完成绑定，
    也可以在调用时使用method.bind(this)来完成绑定，
    还可以使用arrow function来绑定。
    
        constructor(props) {
           super(props);
           this.handleClick = this.handleClick.bind(this); //构造函数中绑定
      }
        <div onClick={this.handleClick.bind(this)}></div> //使用bind来绑定
        <div onClick={()=>this.handleClick()}></div> //使用arrow function来绑定






# 参考

https://www.cnblogs.com/wonyun/p/5930333.html





