	

$(function(){
	
	var localDate = new Date();
	document.write("now Date :" + localDate +"<br>");
	document.write("时间差分钟       :" + localDate.getTimezoneOffset()+"<br>");
	document.write("UTC Date :" +  getUTCdate()+"<br>");
	document.write("now Date Format :" + localDate.Format("yyyy-MM-dd  hh:mm:ss") +"<br>");
	document.write("UTC Date Format :" + getUTCdate().Format("yyyy-MM-dd  hh:mm:ss")+"<br>");
	document.write("<br>");
	document.write("<br>");
	
	
	document.write("UTCString show at window : 2016-11-03  20:32:33 <br>" 
			+ new Date("2016-11-03  20:32:33")+"<br>"
			+ new Date("2016-11-03  20:32:33").Format("yyyy-MM-dd  hh:mm:ss")+"<br>");
	document.write("<br>");
	document.write("<br>");
	
	
	document.write("转换成字符串比较1 :" + new Date(1000000).Format("yyyy-MM-dd  hh:mm:ss")+"<br>");
	document.write("转换成字符串比较2 :" + new Date(2000000).Format("yyyy-MM-dd  hh:mm:ss")+"<br>");
	document.write("转换成字符串比较1>2 :" + (new Date(1000000).Format("yyyy-MM-dd  hh:mm:ss")>new Date(2000000).Format("yyyy-MM-dd  hh:mm:ss")) +"<br>");
	document.write("转换成字符串比较1<2 :" + (new Date(1000000).Format("yyyy-MM-dd  hh:mm:ss")<new Date(2000000).Format("yyyy-MM-dd  hh:mm:ss")) +"<br>");
	document.write("转换成字符串比较2=2 :" + (new Date(2000000).Format("yyyy-MM-dd  hh:mm:ss")==new Date(2000000).Format("yyyy-MM-dd  hh:mm:ss")) +"<br>");
})



	Date.prototype.Format = function(fmt) { 
		if(!fmt){
			fmt = "yyyy-MM-dd <br/>   hh:mm:ss";
		}
		var o = {
			"M+" : this.getMonth() + 1, // 月份
			"d+" : this.getDate(), // 日
			"h+" : this.getHours(), // 小时
			"m+" : this.getMinutes(), // 分
			"s+" : this.getSeconds(), // 秒
			"q+" : Math.floor((this.getMonth() + 3) / 3), // 季度
			"S" : this.getMilliseconds()
		// 毫秒
		};
		if (/(y+)/.test(fmt))
			fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "")
					.substr(4 - RegExp.$1.length));
		for ( var k in o)
			if (new RegExp("(" + k + ")").test(fmt))
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k])
						: (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}


	function getUTCdate(date){
		var localDate = date?date:new Date();
		return new Date(localDate.getTime()+localDate.getTimezoneOffset()*60000);
	}
	