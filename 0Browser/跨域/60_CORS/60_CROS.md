
# 1 概述

    CORS（Cross-Origin Resource Sharing）
    跨域资源共享
    它是W3C标准，大部分浏览器都支持
    它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。



# 4 简单跨域和非简单跨域

    浏览器将CORS请求分成两类：简单跨域请求（simple request）和非简单跨域请求（not-so-simple request）。
    只要同时满足以下两大条件，就属于简单跨域请求。
    
```
（1) 请求方法是以下三种方法之一：
    HEAD
    GET
    POST
（2）HTTP的头信息不超出以下几种字段：
    Accept
    Accept-Language
    Content-Language
    Last-Event-ID
    Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain
```

# 5 简单跨域请求

## 5.1 发出请求

    
    浏览器发现是简单跨域请求，
    则在发出CORS请求时,会在头信息之中，增加一个Origin字段。
    Origin字段用来说明，本次请求来自哪个源（协议 + 域名 + 端口）。
    服务器根据这个值，决定是否同意这次请求。


## 5.2 服务器允许

    如果Origin指定的域名在许可范围内，服务器响应响应时，会多出几个响应头。

响应头分析

    Access-Control-Allow-Origin
        必选 * 
        表示允许的Origin字段的值
    Access-Control-Allow-Credentials
        可选  
        表示是否允许发送Cookie。
        默认情况下，Cookie不包括在CORS请求之中。
        设为true，即表示服务器明确许可，Cookie可以包含在请求中，一起发给服务器。
        这个值也只能设为true，如果服务器不要浏览器发送Cookie，删除该字段即可。
    Access-Control-Expose-Headers
        可选
        CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma。
        如果想拿到其他字段，就必须在Access-Control-Expose-Headers里面指定。

## 5.3 服务器不允许

    如果Origin指定的源，不在许可范围内，服务器会返回一个正常的HTTP回应。
    浏览器发现，这个回应的头信息没有包含Access-Control-Allow-Origin字段，就知道出错了，
    从而抛出一个错误，被XMLHttpRequest的onerror回调函数捕获。
    注意，这种错误无法通过状态码识别，因为HTTP回应的状态码有可能是200。

## 5.4  Cookie

默认情况

    CORS请求默认不发送Cookie和HTTP认证信息。

如果要把Cookie发到服务器

    必须在AJAX请求中打开withCredentials属性
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    同时设置服务器
    指定Access-Control-Allow-Credentials字段,为true

注意

    如果要发送Cookie，
    Access-Control-Allow-Origin就不能设为星号，必须指定明确的、与请求网页一致的域名。
    同时，Cookie依然遵循同源政策，只有用服务器域名设置的Cookie才会上传，其他域名的Cookie并不会上传，
    且（跨源）原网页代码中的document.cookie也无法读取服务器域名下的Cookie。



    
# 6 非简单跨域请求

    
    非简单跨域请求有一个预检机制，会先发送一次预检请求，然后再发送真正的请求

## 6.1 预检请求

流程

    浏览器发现是非简单跨域请求，
    在正式通信之前，浏览器会自动发送增加一次HTTP查询请求，
    称为"预检"请求（preflight）。

实例

```
脚本
    var url = 'http://api.alice.com/cors';
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', url, true);
    xhr.setRequestHeader('X-Custom-Header', 'value');
    xhr.send();
    
浏览器预检
    OPTIONS /cors HTTP/1.1
    Origin: http://api.bob.com
    Access-Control-Request-Method: PUT
    Access-Control-Request-Headers: X-Custom-Header
    Host: api.alice.com
    Accept-Language: en-US
    Connection: keep-alive
    User-Agent: Mozilla/5.0...
```

分析

    请求方法是OPTIONS，表示这个请求是用来询问的。
    Origin   表示请求来自哪个源。
    Access-Control-Request-Method  列出浏览器的CORS请求会用到哪些HTTP方法
    Access-Control-Request-Headers  指定浏览器CORS请求会额外发送的头信息字段


## 6.2 预检请求的回应

流程

    服务器收到"预检"请求以后，
    检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，
    确认允许跨源请求，就可以做出回应。

允许

    如果浏览器允许了"预检"请求，会返回一个携带CORS相关的头信息的HTTP回应

实例

    ```
    HTTP/1.1 200 OK
    Date: Mon, 01 Dec 2008 01:15:39 GMT
    Server: Apache/2.0.61 (Unix)
    Access-Control-Allow-Origin: http://api.bob.com
    Access-Control-Allow-Methods: GET, POST, PUT
    Access-Control-Allow-Headers: X-Custom-Header
    Content-Type: text/html; charset=utf-8
    Content-Encoding: gzip
    Content-Length: 0
    Keep-Alive: timeout=2, max=100
    Connection: Keep-Alive
    Content-Type: text/plain
    ```

分析

    Access-Control-Allow-Origin   表示服务器支持的所有源*
    Access-Control-Allow-Methods  表明服务器支持的所有跨域请求的方法
    Access-Control-Allow-Headers  表明服务器支持的所有头信息字段
    Access-Control-Allow-Credentials
    Access-Control-Max-Age        该字段可选，用来指定本次预检请求的有效期，单位为秒。上面结果中，有效期是20天（1728000秒），即允许缓存该条回应1728000秒（即20天），在此期间，不用发出另一条预检请求。
    
    
否定
    
    如果浏览器否定了"预检"请求，会返回一个正常的HTTP回应，但是没有任何CORS相关的头信息字段。
    这时，浏览器就会认定，服务器不同意预检请求，因此触发一个错误，被XMLHttpRequest对象的onerror回调函数捕获。
    控制台会打印出如下的报错信息。    
    XMLHttpRequest cannot load http://api.alice.com.
    Origin http://api.bob.com is not allowed by Access-Control-Allow-Origin.
    
    
## 6.3 浏览器的正常请求和回应

    一旦服务器通过了"预检"请求，
    在预检请求的有效期内
    每次浏览器正常的CORS请求，就都跟简单跨域请求一样，会有一个Origin头信息字段。
    服务器的回应，也都会有一个Access-Control-Allow-Origin头信息字段。


# 8 分析

## 优点

    整个CORS通信过程，都是浏览器自动完成，不需要用户参与。
    对于开发者来说，CORS通信与同源的AJAX通信没有差别，代码完全一样。
    浏览器一旦发现AJAX请求跨源，就会自动添加一些附加的头信息，有时还会多出一次附加的请求，但用户不会有感觉。

## 缺点

    CORS需要浏览器和服务器同时支持。
    浏览器
        目前，所有浏览器都支持该功能，IE浏览器不能低于IE10。
    服务器    
        服务器要实现了CORS接口。   
    
# 9 实践

    不跨域,不会发起CROS
    简单请求,不发启CROS预检

    服务器端使用springmvc及CorsRegistry作为解决方案
    
    cookie 未测试
    
