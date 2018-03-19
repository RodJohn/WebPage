
# 概述
    
    WebSocket是一种通信协议，使用ws://（非加密）和wss://（加密）作为协议前缀。
    该协议不实行同源政策，只要服务器支持，就可以通过它进行跨源通信。

# 分析
    
下面是一个例子，浏览器发出的WebSocket请求的头信息（摘自维基百科）。

    GET /chat HTTP/1.1
    Host: server.example.com
    Upgrade: websocket
    Connection: Upgrade
    Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
    Sec-WebSocket-Protocol: chat, superchat
    Sec-WebSocket-Version: 13
    Origin: http://example.com
    
    上面代码中，有一个字段是Origin，表示该请求的请求源（origin），即发自哪个域名。
    正是因为有了Origin这个字段，所以WebSocket才没有实行同源政策。
    因为服务器可以根据这个字段，判断是否许可本次通信。