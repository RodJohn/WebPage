



新的关键字class从ES6开始正式被引入到JavaScript中。class的目的就是让定义类更简单。



定义

```
class Student {
    constructor(name) {
        this.name = name;
    }

    hello() {
        alert('Hello, ' + this.name + '!');
    }
}
```

创建/调用

```
var xiaoming = new Student('小明');
xiaoming.hello();
```
继承

```
class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    myGrade() {
        alert('I am at grade ' + this.grade);
    }
}

通过super(name)来调用父类的构造函数
```

原理

ES6引入的class和原有的JavaScript原型继承有什么区别呢？
实际上它们没有任何区别，class的作用就是让JavaScript引擎去实现原来需要我们自己编写的原型链代码。
简而言之，用class的好处就是极大地简化了原型链代码。

现在用还早了点，因为不是所有的主流浏览器都支持ES6的class。
如果一定要现在就用上，就需要一个工具把class代码转换为传统的prototype代码，
可以试试Babel这个工具。




