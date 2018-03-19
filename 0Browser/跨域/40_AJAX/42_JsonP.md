
# JSONP

    使用jsonp解决同源策略下ajax的跨域访问

# 原理

    浏览器允许静态资源跨域
    通过动态创建script，
    再请求一个带参网址实现跨域通信
    服务器收到请求后，将数据放在一个指定名字的回调函数里传回来。
    
# 示例

原生实现
```
 <script>
    var script = document.createElement('script');
    script.type = 'text/javascript';

    // 传参并指定回调执行函数为onBack
    script.src = 'http://www.domain2.com:8080/login?user=admin&callback=onBack';
    document.head.appendChild(script);

    // 回调执行函数
    function onBack(res) {
        alert(JSON.stringify(res));
    }
 </script>
 
 服务端返回如下（返回时即执行全局函数）：
 onBack({"status": true, "user": "admin"})
```
分析

    上面代码通过动态添加<script>元素，向服务器发出请求。
    注意，该请求的查询字符串有一个callback参数，用来指定回调函数的名字，这对于JSONP是必需的。
    服务器收到这个请求以后，会将数据放在回调函数的参数位置返回
    由于<script>元素请求的脚本，直接作为代码运行。
    这时，只要浏览器定义了foo函数，该函数就会立即调用。
    作为参数的JSON数据被视为JavaScript对象，而不是字符串，因此避免了使用JSON.parse的步骤。

jquery ajax
```
$.ajax({
    url: 'http://www.domain2.com:8080/login',
    type: 'get',
    dataType: 'jsonp',  // 请求方式为jsonp
    jsonpCallback: "onBack",    // 自定义回调函数名
    data: {}
});
```

# 特点

    最大特点就是简单适用，老式浏览器全部支持，服务器改造非常小。
    但是JSONP只支持GET请求
    
    