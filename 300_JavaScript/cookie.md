url

获取当前页面url     
var url = location.href
跳转到指定url	       
location.href = url 


从url中获取指定参数
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
添加指定参数到url(并覆盖)
 var uri=location.href;
    	uri=uri.replace(/pageNo=[1-9]*/,"pageNo="+pageNo);
    	if(uri.indexOf("pageNo=")==-1){
        	if(uri.indexOf("?")==-1)
        		uri+="?";
        	else
        		uri+="&";
    		uri+="pageNo="+pageNo;
    	}

cookie

设置cookie
function setCookie(name,value,hours,path)
{
	var exp = new Date();
	exp.setTime(exp.getTime() + hours*60*60*1000);
	document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString() + ";path=" + path;
}  

读取cookie
function getCookie(name)
{
var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
if(arr=document.cookie.match(reg))
return unescape(arr[2]);
else
return null;
} 

删除cookie
function delCookie(name)
{
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getCookie(name);
	if(cval!=null)
	document.cookie= name + "="+cval+";expires="+exp.toGMTString();
} 

参考资料
http://blog.csdn.net/xidor/article/details/2011203
