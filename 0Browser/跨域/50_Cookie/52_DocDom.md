

Cookie 是服务器写入浏览器的一小段信息，只有同源的网页才能共享。

# document.domain

    两个网页一级域名相同，只是二级域名不同，
    
    
    浏览器允许通过设置document.domain共享 Cookie。


## 举例
    
    A网页是http://w1.example.com/a.html，
    B网页是http://w2.example.com/b.html，
    那么只要设置相同的document.domain，两个网页就可以共享Cookie。


#  cookie.domain

    服务器也可以在设置Cookie的时候，指定Cookie的所属域名为一级域名，比如.example.com。
    Set-Cookie: key=value; domain=.example.com; path=/