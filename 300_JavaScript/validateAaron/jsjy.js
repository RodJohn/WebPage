	

$(function(){
	
		/**等到第一次提交以后 才会有keyup的校验***/
	
		$("#bt").click(function(){

			aaronValidate_();
			$.each(aaronValidateKeyupArr,function(){
				($(this)).keyup(function(){
					aaronValidate_();
				});
			});
			console.log(getAaronValidateMsgBrStr());
		});
	});



 var aaronValidate_ =function(){
		aaronValidateMain($("[name='i1']"),"1","1不是1");
		aaronValidateKeyupArr.push($("[name='i1']"));
		aaronValidateMain($("[name='i2']"),"1","2是1",$("[name='i3']"));
		aaronValidateKeyupArr.push($("[name='i2']"));
		aaronValidateMain($("[name='i4']"),null,"1>2",$("[name='i5']"),
				function(){
					return $("[name='i4']").val()>4;
				});
		aaronValidateKeyupArr.push($("[name='i4']"));
 }