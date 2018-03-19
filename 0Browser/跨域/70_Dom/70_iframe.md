

# 概述

    如果两个网页不同源，就无法拿到对方的DOM。
    典型的例子是iframe窗口和window.open方法打开的窗口，它们与父窗口无法通信。

示例

    比如，父窗口运行下面的命令，如果iframe窗口不是同源，就会报错。
    document.getElementById("myIFrame").contentWindow.document
    // Uncaught DOMException: Blocked a frame from accessing a cross-origin frame.
    上面命令中，父窗口想获取子窗口的DOM，因为跨源导致报错。
    反之亦然，子窗口获取主窗口的DOM也会报错。
    window.parent.document.body
    // 报错
    
    
# document.domain
    
    如果两个窗口一级域名相同，只是二级域名不同，、
    那么设置上一节介绍的document.domain属性，就可以规避同源政策，拿到DOM。