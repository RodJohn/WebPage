

# window.postMessage

    HTML5跨文档通信 API（Cross-document messaging）。
    这个API为window对象新增了一个window.postMessage方法，允许跨窗口通信，不论这两个窗口是否同源。






## 发送消息

发送消息

    父窗口http://aaa.com向子窗口http://bbb.com发消息
    var popup = window.open('http://bbb.com', 'title');
    popup.postMessage('Hello World!', 'http://bbb.com');
    postMessage方法的第一个参数是具体的信息内容，
    第二个参数是接收消息的窗口的源（origin），即"协议 + 域名 + 端口"。
    也可以设为*，表示不限制域名，向所有窗口发送。
    
    子窗口向父窗口发送消息的写法类似。
    window.opener.postMessage('Nice to see you', 'http://aaa.com');


## 接收消息


    父窗口和子窗口都可以通过message事件，监听对方的消息。
    window.addEventListener('message', function(e) {
      console.log(e.data);
    },false);
    
    
    message事件的事件对象event，提供以下三个属性。
    
    event.source：发送消息的窗口
    event.origin: 消息发向的网址
    event.data: 消息内容
    下面的例子是，子窗口通过event.source属性引用父窗口，然后发送消息。
    
    
    window.addEventListener('message', receiveMessage);
    function receiveMessage(event) {
      event.source.postMessage('Nice to see you!', '*');
    }
    event.origin属性可以过滤不是发给本窗口的消息。
    
    
    window.addEventListener('message', receiveMessage);
    function receiveMessage(event) {
      if (event.origin !== 'http://aaa.com') return;
      if (event.data === 'Hello World') {
          event.source.postMessage('Hello', event.origin);
      } else {
        console.log(event.data);
      }
    }
    
    
    
# LocalStorage

通过window.postMessage，读写其他窗口的 LocalStorage 也成为了可能。

下面是一个例子，主窗口写入iframe子窗口的localStorage。

    
    window.onmessage = function(e) {
      if (e.origin !== 'http://bbb.com') {
        return;
      }
      var payload = JSON.parse(e.data);
      localStorage.setItem(payload.key, JSON.stringify(payload.data));
    };
    上面代码中，子窗口将父窗口发来的消息，写入自己的LocalStorage。
    
    父窗口发送消息的代码如下。
    
    
    var win = document.getElementsByTagName('iframe')[0].contentWindow;
    var obj = { name: 'Jack' };
    win.postMessage(JSON.stringify({key: 'storage', data: obj}), 'http://bbb.com');


加强版的子窗口接收消息的代码如下。
    
    
    window.onmessage = function(e) {
      if (e.origin !== 'http://bbb.com') return;
      var payload = JSON.parse(e.data);
      switch (payload.method) {
        case 'set':
          localStorage.setItem(payload.key, JSON.stringify(payload.data));
          break;
        case 'get':
          var parent = window.parent;
          var data = localStorage.getItem(payload.key);
          parent.postMessage(data, 'http://aaa.com');
          break;
        case 'remove':
          localStorage.removeItem(payload.key);
          break;
      }
    };
    加强版的父窗口发送消息代码如下。
    
    
    var win = document.getElementsByTagName('iframe')[0].contentWindow;
    var obj = { name: 'Jack' };
    // 存入对象
    win.postMessage(JSON.stringify({key: 'storage', method: 'set', data: obj}), 'http://bbb.com');
    // 读取对象
    win.postMessage(JSON.stringify({key: 'storage', method: "get"}), "*");
    window.onmessage = function(e) {
      if (e.origin != 'http://aaa.com') return;
      // "Jack"
      console.log(JSON.parse(e.data).name);
    };    