


# 概述

在promise之前代码过多的回调或者嵌套，可读性差、耦合度高、扩展性低。
通过Promise机制，扁平化的代码机构，大大提高了代码可读性；
用同步编程的方式来编写异步代码，保存线性的代码逻辑，
极大的降低了代码耦合性而提高了程序的可扩展性。

说白了就是用同步的方式去写异步代码。

让异步代码跟容易阅读

简单用法

new Promise(
    /* executor */
    function(resolve, reject) {
        if (/* success */) {
            // ...执行代码
            resolve();
        } else { /* fail */
            // ...执行代码
            reject();
        }
    }
);

发起异步请求

    fetch('/api/todos')
      .then(res => res.json())
      .then(data => ({ data }))
      .catch(err => ({ err }));
      
      
 
 

# 参考

真的理解了
https://www.imooc.com/article/20580?block_id=tuijian_wz
https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/0014345008539155e93fc16046d4bb7854943814c4f9dc2000
https://segmentfault.com/a/1190000011652907