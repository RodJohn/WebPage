





# 8 无状态函数式定义

    创建无状态函数式组件形式是从React 0.14版本开始出现的。
    它是为了创建纯展示组件，
    这种组件只负责根据传入的props来展示，不涉及到要state状态的操作。

## 定义方式

ES5

    const myComponent = function(props){
        return(
            <div>Hello {props.name}</div>;
        );
    }


ES6

    const myComponent = (props) =>{
        return(
            <div>Hello {props.name}</div>;
        );
    }








    function HelloComponent(props) {
      return <div>Hello {props.name}</div>
    }
    ReactDOM.render(<HelloComponent name="Sebastian" />, mountNode) 