

param
路由路径是匹配一个（或一部分）URL 的 一个字符串模式。大部分的路由路径都可以直接按照字面量理解

# 嵌套匹配

    相对路径和绝对路径

# 特殊匹配符

规则

    :paramName 
        – 匹配一段位于 /、? 或 # 之后的 URL。 命中的部分将被作为一个参数
    () 
        – 在它内部的内容被认为是可选的
    * 
        – 匹配任意字符（非贪婪的）直到命中下一个字符或者整个 URL 的末尾，并创建一个 splat 参数

示例

    <Route path="/hello/:name">         
        // 匹配 /hello/michael 和 /hello/ryan
    <Route path="/hello(/:name)">       
        // 匹配 /hello, /hello/michael 和 /hello/ryan
    <Route path="/files/*.*">           
        // 匹配 /files/hello.jpg 和 /files/path/to/hello.jpg

