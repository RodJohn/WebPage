


# AJAX

    用jQuery的相关对象来处理AJAX，不但不需要考虑浏览器问题，代码也能大大简化
    
    jQuery在全局对象jQuery（也就是$）绑定了ajax()函数，可以处理AJAX请求.ajax(url, settings)
    

## settings 

常用选项

    async：是否异步执行AJAX请求，默认为true，千万不要指定为false；
    
    method：发送的Method，缺省为'GET'，可指定为'POST'、'PUT'等；
    
    contentType：发送POST请求的格式，默认值为'application/x-www-form-urlencoded; charset=UTF-8'，也可以指定为text/plain、application/json；
    
    data：发送的数据，可以是字符串、数组或object。如果是GET请求，data将被转换成query附加到URL上，如果是POST请求，根据contentType把data序列化成合适的格式；
    
    headers：发送的额外的HTTP头，必须是一个object；
    
    dataType：接收的数据格式，可以指定为'html'、'xml'、'json'、'text'等，缺省情况下根据响应的Content-Type猜测。



## 完整实例

```
    $.ajax({
        type: 'GET',
        url: "http://127.0.0.1:8080/im/test",
        data: data,
        async:true,
        success: (function () {
            alert("second success");
        }),
        error: (function () {
            alert("error");
        })
    });

```