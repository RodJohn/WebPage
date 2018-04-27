

# 概述 

JavaScript 有一套完全不同于其它语言的对 this 的处理机制。 在五种不同的情况下 ，this 指向的各不相同。

有句话说得很在理 -- 谁调用它，this就指向谁


# 全局范围内

作用

    在全局范围内使用this ，它将指向全局对象（浏览器中为 window）

示例

   var name = 'name1';
   console.log(name);
   
   this.name = 'name2';
   console.log(name);
   console.log(this.name);
   
   window.name = 'name3';
   console.log(name);
   console.log(this.name);
   console.log(window.name);
   
   name1
   name2
   name2
   name3
   name3
   name3
   
# 全局函数

作用

    直接调用一个函数，this 默认会指向全局 （浏览器端为window)

示例

    var name = 'name1';
    function sayName(){
     console.log(name);
     console.log(this);
    }
    
    sayName();
    window.sayName();

       