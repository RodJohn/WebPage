
# window.name + iframe

## 原理

基础知识

    iframe
        iframe是html的一个标签，可以在网页中创建内联框架，
        它有个src属性（指向文件地址，html、php等）可以选择内联框架的内容，
    window.name        
        window.name（一般在js代码里出现）的值不是一个普通的全局变量，而是当前窗口的名字，
        每个iframe都有包裹它的window，而这个window是top window的子窗口，而它自然也有window.name的属性，
        window.name属性的神奇之处在于
        name 值在不同的页面（甚至不同域名）加载后依旧存在（如果没修改则值不会变化），
        并且可以支持非常长的 name 值（2MB）。
原理
    
    通过iframe的src属性由外域转向本地域，
    跨域数据即由iframe的window.name从外域传递到本地域。
    这个就巧妙地绕过了浏览器的跨域访问限制，但同时它又是安全操作。

## 实现

a.html：(http://www.domain1.com/a.html)
```
var proxy = function(url, callback) {
    var state = 0;
    var iframe = document.createElement('iframe');

    // 加载跨域页面
    iframe.src = url;

    // onload事件会触发2次，第1次加载跨域页，并留存数据于window.name
    iframe.onload = function() {
        if (state === 1) {
            // 第2次onload(同域proxy页)成功后，读取同域window.name中数据
            callback(iframe.contentWindow.name);
            destoryFrame();

        } else if (state === 0) {
            // 第1次onload(跨域页)成功后，切换到同域代理页面
            iframe.contentWindow.location = 'http://www.domain1.com/proxy.html';
            state = 1;
        }
    };

    document.body.appendChild(iframe);

    // 获取数据以后销毁这个iframe，释放内存；这也保证了安全（不被其他域frame js访问）
    function destoryFrame() {
        iframe.contentWindow.document.write('');
        iframe.contentWindow.close();
        document.body.removeChild(iframe);
    }
};

// 请求跨域b页面数据
proxy('http://www.domain2.com/b.html', function(data){
    alert(data);
});

```

proxy.html：(http://www.domain1.com/proxy....

    中间代理页，与a.html同域，内容为空即可。

b.html：(http://www.domain2.com/b.html)

    <script>
        window.name = 'This is domain2 data!';
    </script>
    

## 分析



# 参考

https://www.cnblogs.com/zichi/p/4620656.html
