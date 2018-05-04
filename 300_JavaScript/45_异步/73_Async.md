
# 概述

概述

    最好的异步写法

优势

    处理then链

要求

    ES7



# 3 async 

作用

    被async修饰函数会返回一个promise对象
        直接量会使用Promise.resolve()封装。
        没有返回值会返回 Promise.resolve(undefined)

例子

    async function testAsync() {
        return "hello async";
    }
    
    const result = testAsync();
    console.log(result);
    
    运行结果
    //Promise {<resolved>: "hello async"}


# 5 await

作用

    await 用于等待的一个表达式
    如果表达式的计算结果是普通对象
        那 await 表达式的运算结果就是它等到的东西。
    如果表达式结果是Promise 对象
        那么await将阻塞后面的代码，直到获得resolve的值，作为表达式的运算结果。

要求

     await 必须用在 async 函数中
    
例子

    function getSomething() {
        return "something";
    }
    
    async function testAsync() {
        return Promise.resolve("hello async");
    }
    
    async function test() {
        const v1 = await getSomething();
        const v2 = await testAsync();
        console.log(v1, v2);
    }
    
    test();    

    运行结果
    //testsomething hello async
    //Promise {<resolved>: undefined}

异常

    await 命令后面的 Promise 对象，运行结果可能是 rejected，所以最好把 await 命令放在 try...catch 代码块中。
    
    async function myFunction() {
      try {
        await somethingThatReturnsAPromise();
      } catch (err) {
        console.log(err);
      }
    }
    
    // 另一种写法
    
    async function myFunction() {
      await somethingThatReturnsAPromise().catch(function (err){
        console.log(err);
      });
    }
    
    

# 8 优点

## then链

好处

    await 直接计算表达式结果
    
例子

    调用promise1，使用promise1返回的结果去调用promise2，然后使用两者的结果去调用promise3。
    
    const makeRequest = () => {
      return promise1()
        .then(value1 => {
          return promise2(value1)
            .then(value2 => {        
              return promise3(value1, value2)
            })
        })
    }
    
    
    const makeRequest = async () => {
      const value1 = await promise1()
      const value2 = await promise2(value1)
      return promise3(value1, value2)
    }


## 条件

优点

    用同步的方式写异步代码

例子

    需要获取数据，然后根据返回数据决定是直接返回，还是继续获取更多的数据。
    
    const makeRequest = () => {
      return getJSON()
        .then(data => {
          if (data.needsAnotherRequest) {
            return makeAnotherRequest(data)
              .then(moreData => {
                console.log(moreData)
                return moreData
              })
          } else {
            console.log(data)
            return data
          }
        })
    }
    
    
    const makeRequest = async () => {
      const data = await getJSON()
      if (data.needsAnotherRequest) {
        const moreData = await makeAnotherRequest(data);
        console.log(moreData)
        return moreData
      } else {
        console.log(data)
        return data    
      }
    }


## 异常处理

好处

    错误栈会指向错误所在的函数

例子

    const makeRequest = async () => {
      await callAPromise()
      await callAPromise()
      await callAPromise()
      await callAPromise()
      await callAPromise()
      throw new Error("oops");
    }
    
    makeRequest()
      .catch(err => {
        console.log(err);
        // output
        // Error: oops at makeRequest (index.js:7:9)
      })
      
      
## 调试

    




# 参考

容易理解

    https://segmentfault.com/a/1190000007535316

优点

    http://cnodejs.org/topic/58e4914e43ee7e7106c13541