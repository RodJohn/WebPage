


# export命令除了输出变量

一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。
如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。
下面是一个 JS 文件，里面使用export命令输出变量。
ES6 将其视为一个模块，里面用export命令对外部输出了三个变量。

    // profile.js
    export var firstName = 'Michael';
    export var lastName = 'Jackson';
    export var year = 1958;

    或者

    // profile.js
    var firstName = 'Michael';
    var lastName = 'Jackson';
    var year = 1958;
    
    export {firstName, lastName, year};

上面代码在export命令后面，使用大括号指定所要输出的一组变量。它与前一种写法（直接放置在var语句前）是等价的，但是应该优先考虑使用这种写法。
因为这样就可以在脚本尾部，一眼看清楚输出了哪些变量


# 输出函数或类（class）

export function multiply(x, y) {
  return x * y;
};
上面代码对外输出一个函数multiply。

function f() {}
export {f};



# as关键字重命名。

function v1() { ... }
function v2() { ... }

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};
上面代码使用as关键字，重命名了函数v1和v2的对外接口。重命名后，v2可以用不同的名字输出两次。




# 位置

export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错，下一节的import命令也是如此。这是因为处于条件代码块之中，就没法做静态优化了，违背了 ES6 模块的设计初衷。











# 3 import

    使用export命令定义了模块的对外接口以后，
    其他 JS 文件就可以通过import命令加载这个模块。


# 3.2 获取变量

举例

    // main.js
    import {firstName, lastName, year} from './profile.js';


    上面代码的import命令，用于加载profile.js文件，并从中输入变量。
    import命令接受一对大括号，里面指定要从其他模块导入的变量名。
    大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。


变量重命名
    
    如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。
    import { lastName as surname } from './profile.js';





## 3.6 模块路径

    import后面的from指定模块文件的位置，
    可以是相对路径，也可以是绝对路径，.js后缀可以省略。
    如果只是模块名，不带有路径，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置。

例如

    import {myMethod} from 'util';
    上面代码中，util是模块文件名，由于不带有路径，必须通过配置，告诉引擎怎么取到这个模块。






# 5 export default 

原因

    从前面的例子可以看出，使用import命令的时候，
    用户需要知道所要加载的变量名或函数名，否则无法加载。
    但是，用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法。
    export default命令，为模块指定默认输出。

## 5.1 规则
    
    export default命令用于指定模块的默认输出。
    一个模块只能有一个默认输出，
    因此
        一个模块export default命令只能使用一次
        import命令后面，不使用大括号。  

## 5.3 示例

默认导出

    // export-default.js
    export default function () {
      console.log('foo');
    }
    
    或者
    
    function foo() {
      console.log('foo');
    }
    
    export default foo;

导入实例

    // import-default.js
    import customName from './export-default';
    customName(); // 'foo'
    
    上面代码的import命令，可以用任意名称指向export-default.js输出的方法，这时就不需要知道原模块输出的函数名。

## 5.6 导入默认和非默认变量

    
    如果想在一条import语句中，同时输入默认方法和其他接口，可以写成下面示例。

导出示例

    export default function (obj) {
      // ···
    }
    
    export function each(obj, iterator, context) {
      // ···
    }
    
    export { each as forEach };
    
导入示例

    import _, { each, each as forEach } from 'lodash';    

## 5.7 原理

本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。
    
    // modules.js
    function add(x, y) {
      return x * y;
    }
    export {add as default};
    // 等同于
    // export default add;
    
    // app.js
    import { default as foo } from 'modules';
    // 等同于
    // import foo from 'modules';



# 7 变量的读取特性

export语句输出的接口，与其对应的值是动态绑定关系，
即通过该接口，可以取到模块内部实时的值。

变量都是只读的，因为它的本质是输入接口。

    import {a} from './xxx.js'
    a = {}; // Syntax Error : 'a' is read-only;
    
    脚本加载了变量a，对其重新赋值就会报错，因为a是一个只读的接口。

特例

    如果输入变量a是一个对象，改写a的属性是允许的。
    
    import {a} from './xxx.js'
    a.foo = 'hello'; // 合法操作
    
    上面代码中，a的属性可以成功改写，并且其他模块也可以读到改写后的值。

最佳实践

    建议凡是输入的变量，都当作完全只读，轻易不要改变它的属性。


# import 用法

注意，import命令具有提升效果，会提升到整个模块的头部，首先执行。

foo();

import { foo } from 'my_module';
上面的代码不会报错，因为import的执行早于foo的调用。这种行为的本质是，import命令是编译阶段执行的，在代码运行之前。

由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。

// 报错
import { 'f' + 'oo' } from 'my_module';

// 报错
let module = 'my_module';
import { foo } from module;

// 报错
if (x === 1) {
  import { foo } from 'module1';
} else {
  import { foo } from 'module2';
}





# 模块的整体加载 
除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。

下面是一个circle.js文件，它输出两个方法area和circumference。

// circle.js

export function area(radius) {
  return Math.PI * radius * radius;
}

export function circumference(radius) {
  return 2 * Math.PI * radius;
}
现在，加载这个模块。

// main.js

import { area, circumference } from './circle';

console.log('圆面积：' + area(4));
console.log('圆周长：' + circumference(14));
上面写法是逐一指定要加载的方法，整体加载的写法如下。

import * as circle from './circle';

console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));



    




# export 与 import 的复合写法 § ⇧


如果在一个模块之中，先输入后输出同一个模块，import语句可以与export语句写在一起。

export { foo, bar } from 'my_module';

// 可以简单理解为
import { foo, bar } from 'my_module';
export { foo, bar };
上面代码中，export和import语句可以结合在一起，写成一行。但需要注意的是，写成一行以后，foo和bar实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用foo和bar。

模块的接口改名和整体输出，也可以采用这种写法。

// 接口改名
export { foo as myFoo } from 'my_module';

// 整体输出
export * from 'my_module';
默认接口的写法如下。

export { default } from 'foo';
具名接口改为默认接口的写法如下。

export { es6 as default } from './someModule';

// 等同于
import { es6 } from './someModule';
export default es6;
同样地，默认接口也可以改名为具名接口。

export { default as es6 } from './someModule';
下面三种import语句，没有对应的复合写法。

import * as someIdentifier from "someModule";
import someIdentifier from "someModule";
import someIdentifier, { namedIdentifier } from "someModule";
为了做到形式的对称，现在有提案，提出补上这三种复合写法。

export * as someIdentifier from "someModule";
export someIdentifier from "someModule";
export someIdentifier, { namedIdentifier } from "someModule"




   