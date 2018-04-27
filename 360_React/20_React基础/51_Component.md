





# 8 无状态函数式定义

## 8.1 概述

    无状态函数式组件
        从React 0.14版本开始出现的。
    它是为了创建纯展示组件，
    这种组件只负责根据传入的props来展示，不涉及到要state状态的操作。


## 8.3 定义

注意
    
    1.组件名开头要大写

ES5

    const MyComponent = function(props){
        return(
            <div>Hello {props.name}</div>;
        );
    }


ES6

    const MyComponent = (props) =>{
        return(
            <div>Hello {props.name}</div>;
        );
    }


## 8.4 调用

    直接使用html的形式调用,用属性传递参数

    ReactDOM.render(<HelloComponent name="Sebastian" />, mountNode)
    

## 8.5 传参
    
props

    1.组件定义时,只定义唯一的形参props
        (此时外部传来的所有参数都将成为props的属性)
    2.使用外部传来的参数,都是用props进行获取
    
    示例
    
        const MyComponent = (props) =>{
            return( <div>Hello {props.name}</div>; );
        }    
    
        <HelloComponent name="Sebastian" />

自定义

    1.组件定义时,指定具体的形参名,并使用大括号包装
    
    示例
    
        const MyComponent = ({name}) =>{
            return( <div>Hello {name}</div>; );
        }    
    
        <HelloComponent name="Sebastian" />    
 