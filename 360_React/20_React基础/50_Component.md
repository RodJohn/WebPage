# 参考

https://www.cnblogs.com/wonyun/p/5930333.html



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

## 5.3 特点

### 有状态性

    React.createClass和React.Component都是创建有状态的组件，
    这些组件是要被实例化的，并且可以访问组件的生命周期方法。

### 函数this自绑定




# 8 无状态函数式定义

    创建无状态函数式组件形式是从React 0.14版本开始出现的。
    它是为了创建纯展示组件，
    这种组件只负责根据传入的props来展示，不涉及到要state状态的操作。

## 定义方式

    function HelloComponent(props) {
      return <div>Hello {props.name}</div>
    }
    ReactDOM.render(<HelloComponent name="Sebastian" />, mountNode) 


## 特点

组件不会被实例化

    整体渲染性能得到提升
        因为组件被精简成一个render方法的函数来实现的，
        由于是无状态组件，所以无状态组件就不会在有组件实例化的过程，
        无实例化过程也就不需要分配多余的内存，从而性能得到一定的提升。
    组件不能访问this对象
        无状态组件由于没有实例化过程，所以无法访问组件this中的对象，
        例如：this.ref、this.state等均不能访问。若想访问就不能使用这种形式来创建组件
    组件无法访问生命周期的方法
        因为无状态组件是不需要组件生命周期管理和状态管理，
        所以底层实现这种形式的组件时是不会实现组件的生命周期方法。
        所以无状态组件是不能参与组件的各个生命周期管理的。
    无状态组件只能访问输入的props，
        同样的props会得到同样的渲染结果，不会有副作用
    


## 最佳实践

    无状态组件被鼓励在大型项目中尽可能以简单的写法来分割原本庞大的组件，
    未来React也会这种面向无状态组件在譬如无意义的检查和内存分配领域进行一系列优化，
    所以只要有可能，尽量使用无状态组件。
    在大部分React代码中，大多数组件被写成无状态的组件，通过简单组合可以构建成其他的组件等；
    这种通过多个简单然后合并成一个大应用的设计模式被提倡。
    无状态组件的创建形式使代码的可读性更好，并且减少了大量冗余的代码，精简至只有一个render方法，大大的增强了编写一个组件的便利，除此之外无状态组件还有以下几个显著的特点：
 

# 组件style

组件的style属性的设置方式也值得注意，不能写成


style="opacity:{this.state.opacity};"
而要写成


style={{opacity: this.state.opacity}}
这是因为 React 组件样式是一个对象，所以第一重大括号表示这是 JavaScript 语法，第二重大括号表示样式对象




# 5 引入

可以像插入普通 HTML 标签一样，在网页中插入组件

    变量 HelloMessage 就是一个组件类。
    模板插入 <HelloMessage /> 时，会自动生成 HelloMessage 的一个实例。














