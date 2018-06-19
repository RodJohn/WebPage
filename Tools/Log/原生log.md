
日志方式

    console.log("normal");           
    console.info("information");     
    console.error("error");          
    console.warn("warn");            
    
    只是颜色不一样
    这 4 种方法与 log 方法使用一模一样，只是显示的图标和文字颜色不一样
    
日志分组

    console.group("第一组信息");
        console.log("第一组第一条：我的博客");
        console.log("第一组第二条：CSDN");
    console.groupEnd();
    
    console.group("第二组信息");
        console.log("第二组第一条：程序爱好者QQ群");
        console.log("第二组第二条：欢迎你加入");
    console.groupEnd();        

    
判断变量是否是真 (console.assert()用来判断一个表达式或变量是否为真，只有表达式为false时，才输出一条相应作息，并且抛出一个异常)




# 参考
    
    https://www.cnblogs.com/alantao/p/5859358.html