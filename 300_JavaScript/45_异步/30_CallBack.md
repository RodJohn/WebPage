


    实现异步的最核心原理，就是将callback作为参数传递给异步执行函数，当有结果返回之后再触发 callback执行
    
    
    var wait = function () {
        var task = function () {
            console.log('执行完成')
        }
        setTimeout(task, 2000)
    }
    
    wait()
    
    