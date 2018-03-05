



/**文字标红 添加边框添加和标红**/
	var validateErrorCssValue = function($input,$cssFrame){
		if($input.css("border").indexOf("solid")==-1){
			$input.css("border","1px solid");
		}
		$input.css("color","red");
		
		if($cssFrame){
			if($cssFrame.css("border").indexOf("solid")==-1){
				$cssFrame.css("border","1px solid");
			}
			$cssFrame.css("color","red");
		}
		
	};
	var validateRightCssValue = function($input,$cssFrame){
		if($cssFrame){
			$cssFrame.css("color","black");
		}
		$input.css("color","black");
		
	};
	
/**校验结果数据对象**/
	var aaronValidateMsgObj = {};
	var getAaronValidateMsgArr = function(){	
		var nameValuesArr = [];
        for(var name in aaronValidateMsgObj){   
        	var value = aaronValidateMsgObj[name];
        	if(value){
        		nameValuesArr.push(value);    
        	}
        }  
        return nameValuesArr;
	}
	
	var getAaronValidateMsgBrStr = function(){	
		var nameValuesStr = "";
		for(var name in aaronValidateMsgObj){   
			var value = aaronValidateMsgObj[name];
			if(value){
				nameValuesStr += "<br>"+value;  
			}
		}  
		if(!nameValuesStr){
			nameValuesStr+="请更改以下输入错误:";
		}
		return nameValuesStr;
	}
/**校验错误**/	
	var aaronValidateError = function($valueFrame,addMsg,$cssFrame){
		validateErrorCssValue($valueFrame,$cssFrame);
		aaronValidateMsgObj[$valueFrame.attr("name")]=addMsg;
	}
/**校验正确**/	
	var aaronValidateRight = function($valueFrame,$cssFrame){
		validateRightCssValue($valueFrame,$cssFrame);
		aaronValidateMsgObj[$valueFrame.attr("name")]="";
	}

	
	
/*****/
	var aaronValidateKeyupArr = [];


/**校验主方法
*  要进行校验的确保name是唯一的
**/
var aaronValidateMain = function($valueFrame,zz,addMsg,$cssFrame,validFunc){
		
	/**click触发校验
	aaronValidateKeyupArr.push($valueFrame);**/
		
		
	/**正常校验**/
	var value = $.trim($valueFrame.val());
	if(zz){
		var zzObj = new RegExp(zz);
		if(!zzObj.test(value)){
			aaronValidateError($valueFrame,addMsg,$cssFrame);
			return false;
		}else{
			aaronValidateRight($valueFrame,$cssFrame);
			return true;
		}				
	}else{
		if(!validFunc()){
			aaronValidateError($valueFrame,addMsg,$cssFrame);
			return false;
		}else{
			aaronValidateRight($valueFrame,$cssFrame);
			return true;
		}	
	}

}


