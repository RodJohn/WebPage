


# 1 概述

要求

    ES6提供promise对象。
    
作用

    说白了就是用同步的方式去写异步代码。
    让异步代码跟容易阅读

理解
    
    回调驱动
        1.用Promise封装异步操作
        2.用resolve/reject进行回调
        3.then执行方法,返回新promise
    状态驱动(Promise/A+)
        1.Promise是一个异步容器
        2.异步操作的结果可以修改Promise的状态,
        3.状态的改变触发响应的回调函数
    
    

# 3 构建

## 3.1 动态构建

模板

    var promise = new Promise( function( resolve, reject) { 
        //some code 
        if(//异步操作成功){ 
            resolve(value); 
        }else{ 
            reject(error); 
        } 
    });

解析

    构造函数的参数为一个函数，
        该函数的两个参数分别是resolve和reject，他们是两个函数，由Javascript引擎提供，不用自己部署。
    resolve函数的作用是，
        将promise对象的状态从“pending”变为‘’resolved‘’，
        在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
    reject函数的作用是，
        将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected），
        在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

例子

    对异步读取的promise包装
    const fs = require('fs')
    const path = require('path')  // 后面获取文件路径时候会用到
    const readFilePromise = function (fileName) {
        return new Promise((resolve, reject) => {
            fs.readFile(fileName, (err, data) => {
                if (err) {
                    reject(err)  // 注意，这里执行 reject 是传递了参数，后面会有地方接收到这个参数
                } else {
                    resolve(data.toString())  // 注意，这里执行 resolve 时传递了参数，后面会有地方接收到这个参数
                }
            })
        })
    }
    
    readFilePromise.then() 

## 3.3 构建

Promise.resolve()

    Promise.resolve()接受一个参数值，可以是普通的值，具有then()方法的对象和Promise实例。
    正常情况下，它返回一个Promise对象，状态为fulfilled。
    但是，当解析时发生错误时，返回的Promise对象将会置为rejected态。

Promise.reject()

    返回的Promise对象将会置为rejected态

promise.all()

    异步执行多个promise
    全部执行完才执行then
    
promise.race()

    异步执行多个promise
    任意一个执行完就执行then
    
# 5 then()

## 5.1 概念
    
    Promise实例具有then方法，
    作用是为Promise实例添加状态改变时的回调函数。

## 5.3 回调

概念

    then方法的第一个参数是resolved状态的回调函数 ,第二个参数是rejected状态的回调函数。
    其中，第二个函数是可选的，不一定要提供，
    这两个函数都可以接受promise对象传出的值作为参数；
    
例子

    function timeOut (ms) {
          return new Promise(function(resolve,reject) {
                return  setTimeout(resolve,ms,"done");
           })
    }
    
    timeOut(3000).then( function(value){
        console.log(value);
    })



## 5.5 返回值

概念

    then方法返回的是一个新的Promise实例（不是原来那个Promise实例），
    因此可以采用链式写法，即then方法后面再调用另一个then方法

例子

    getJSON("/post/1.json")
        .then(
            post => getJSON(psot.commentURL)
            )
        .then(
            comments => console.log("resolved:",comments),
            err => console.log("rejected:" ,err)
            );

    上面第一个then方法指定的回调函数，返回的是另一个promise对象，
    第二个then方法指定的回调函数，就会等待这个新的Promise对象状态发生变化。
    如果变为resolved，就调用funA，如果状态变为rejected，就调用funB。


# 6 catch

作用

    then会接收两个参数（函数），
    第一个参数会在执行resolve之后触发，第二个参数会在执行reject之后触发
    但是对于Promise中的异常处理，建议用catch方法，
    
特点
    
    一般会在最后跟一个.catch来捕获异常，
    Promise 对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。
      
例子

     getJSON('/post/1.json').then(function(post) {
       return getJSON(post.commentURL);
     }).then(function(comments) {
       // some code
     }).catch(function(error) {
       // 处理前面三个Promise产生的错误
     });


#  7 效果


callbackhell

    fs.readFile('some1.json', (err, data) => {
        fs.readFile('some2.json', (err, data) => {
            fs.readFile('some3.json', (err, data) => {
                fs.readFile('some4.json', (err, data) => {
    
                })
            })
        })
    })

promise

    readFilePromise('some1.json').then(data => {
        return readFilePromise('some2.json')
    }).then(data => {
        return readFilePromise('some3.json')
    }).then(data => {
        return readFilePromise('some4.json')
    })


# 参考

真的理解promise的文章

    https://www.imooc.com/article/20580?block_id=tuijian_wz

then/catch用法

    https://segmentfault.com/a/1190000011652907
