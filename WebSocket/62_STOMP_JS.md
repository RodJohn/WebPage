


# 常用方法

创建连接

```
var socket = new SockJS('/endpointWisely'); 
//连接webSocket的服务端

var stompClient = Stomp.over(socket);
stompClient.connect({}, function(frame) {}


```

频道订阅
```
stompClient.subscribe('/topic/getResponse', function(respnose){
});
```

发送消息

```
stompClient.send("/app/hello", {}, JSON.stringify({'name':name}))： 
第一个参数：json 负载消息发送的频道； 
第二个参数：是一个头信息的Map，它会包含在 STOMP 帧中；
第三个参数：负载消息；
```


## 示例

```

创建STOMP协议的webSocket客户端。


stompClient.connect({}, function(frame) {//3
    setConnected(true);
    console.log('开始进行连接Connected: ' + frame);
    stompClient.subscribe('/topic/getResponse', function(respnose){ //4
        showResponse(JSON.parse(respnose.body).responseMessage);
    });
});


```




