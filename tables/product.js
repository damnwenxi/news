//var rootUrl = "http://192.168.60.18/cgigc-backend/api";
var rootUrl = "http://www.cgigc.com.cn/cgigc-backend/api";
//var rootUrl = "http://192.168.60.18/cgigc-backend/api";
var isbnUrl = rootUrl + "/isbn";
function verifyCodeUrl(){
    return rootUrl + "/account/verifyCode";
};
function getLatestGameISBNSearchListUrl(){
	return rootUrl + "/mobileGame/getLatestGameISBNSearchList";
}
function mobileCaptchaUrl(){
    return rootUrl + "/account/user/register/captcha?token="+ getToken();
};
function verifyNameUrl(){
    return rootUrl + "/account/register/verify/name?token="+ getToken();
};
function verifyEmailUrl(){
    return rootUrl + "/account/register/verify/email?token="+ getToken();
};
function verifyMobileUrl(){
    return rootUrl + "/account/register/verify/mobile?token="+ getToken();
};
function checkTokenUrl(){
	return isbnUrl + "/checkToken?token="+ getToken()
}
function getToken() {
    return getCookie("token");
} 
function logoutUrl(){
    return rootUrl + "/account/user/logout?token="+ getToken();
};
function loginUrl(){
    return rootUrl + "/account/user/login?token="+ getToken();
};
 function login(formId, callback) {
	$.post(loginUrl(), $("#" + formId).serialize(), function (data) {
		if (data.code == 1) {
			logintype(data.data.name, data.data.token);
		} else {
			if (callback) {
				callback(data.msg);
			}
		}        
	}, "jsonp");
}
function logintype(username, token){
	setCookie("name", username);
	setCookie("token", token);
	console.log("logintype" + logintype + username);
	if(window.location.href == getCookie("href")){
		//同页面不做跳转
	}else if (getCookie("href") && getCookie("href").length > 0) {
		if(getCookie("queryId") && getCookie("queryId").length > 0){
			window.location.href = getCookie("href") + "?queryId=" + getCookie("queryId");
		}else{
			window.location.href = getCookie("href");
		}                    
	} else {
		window.location.href = "http://www.cgigc.com.cn/cgigc/personal.html";
	}
	delCookie("href");
	delCookie("queryId");
}
function logout() {
        $.post(logoutUrl(), {}, function (data) {
            if(data.code == 1){				
                window.location.href = "/";
				delCookie("name");
                delCookie("token");
            }
        }, "jsonp");
    }
function checkToken(callback){
	$.post(checkTokenUrl(), {}, function (data) {
        if (data.code == -1000) {
			delCookie("name");
			setCookie("href", window.location.href);
           window.location.href = "http://www.cgigc.com.cn/login/";
        } else {
            if(callback){
				callback();
			}
        }
    }, "jsonp");
}
function registerUrl(){
    return rootUrl + "/account/user/register?token="+ getToken();
};
function sendRegister(obj, id, callback, popDialog) {
        $.post(registerUrl(), obj, function (data) {
            if (data.code == 1) {
				if(popDialog){
					popDialog();
				}
                window.location.href = "http://www.cgigc.com.cn/login/";
            } else {
                if (callback) {
                    callback(data.msg, id);
                }
            }
        }, "jsonp");
    }
function verifyName(name, id, callback) {
	$.post(verifyNameUrl(), { name: name }, function (data) {
		if (data.code != 1) {
			callback(data.msg, id);
		}
	}, "jsonp");
}
 function verifyMobile(mobile, id, callback) {
	$.post(verifyMobileUrl(), { mobile: mobile }, function (data) {
		if (data.code == 1) {
			/*if (callback) {
				callback(data.msg, id);
			}*/
		} else {
			if (callback) {
				callback(data.msg, id);
			}
		}
	}, "jsonp");
}
function verifyEmail(email, id, callback) {
	$.post(verifyEmailUrl(), { email: email }, function (data) {
		if (data.code == 1) {
			if (callback) {
				callback(data.msg, id);
			}
		} else {
			alert(data.msg);
		}
	}, "jsonp");
}
//手机验证码
function getMobileCaptcha(mobile, callback) {
    $.post(mobileCaptchaUrl(), { mobile: mobile }, function (data) {
        if(data.code == 1){
            callback(data.msg);
        } else {
            callback(data.msg);
        }
    }, "jsonp");
}
var listModel;
var isDisplayFirstLast_ = true;
var oldPage = 0;


function getLatestGameISBNSearchList(id, curPage, pageCount, gameNameKey, unitName, approvalNo, isbnNo, callback){
	/*if((oldPage == curPage) && gameNameKey =="" && unitName == "" && approvalNo == "" && isbnNo == ""){
		return;
	}*/
	oldPage = curPage;
	isDisplayFirstLast_ = false;
	$.post(getLatestGameISBNSearchListUrl(), {curPage:curPage, pageCount:pageCount, gameNameKey:gameNameKey, unitName:unitName, approvalNo:approvalNo, isbnNo:isbnNo}, 
		function (data) {
        if (data.code == 1) {
			if(!listModel){
				listModel = {
					list: ko.observableArray(),
					pageList: ko.observableArray(),
					isDisplayFirstLast:false,
					firstPage:1,
					lastPage:0,
					len:0
				};
				ko.applyBindings(listModel, document.getElementById(id));
			}
			var pageList = [];
			getPageList(pageList, parseInt(data.data["@totalcount"]), parseInt(curPage));			
			listModel.isDisplayFirstLast = isDisplayFirstLast_;
			listModel.firstPage = 1;
			if(!data.data.gameisbn){
				data.data.gameisbn = [];
			}
			listModel.len = data.data.gameisbn.length;
			listModel.lastPage = data.data["@totalcount"];
			listModel.pageList(pageList);
			listModel.list(data.data.gameisbn);
            if (callback) {
                callback();
            }
        } else {
			alert(data.msg);
        }
    }, "jsonp");
}


function getPageList(pageList, size, page) {
    var firstPage = 1;
    var maxPage = 10;
	if(size > maxPage){
		isDisplayFirstLast_ = true;
	}
    if (size > maxPage && page > 3) {
        firstPage = page - 3;
		if(firstPage > 1){
       	 	pageList.push(1);
		}
    }
    var lastPage =  size;
    if (size > maxPage && page + 4 < size) {
        lastPage = page + 4;
    }
    for (var i = firstPage; i <= lastPage; i++) {
        pageList.push(i);
    }
    if (size > maxPage && page + 4 < size) {
        pageList.push(size);
    }
}

function sortNumber(a,b)
{
	return b.c - a.c;
}
function getCookie(name)//取cookies函数
{
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]); return "";
}
function setCookie(name, value, expires, path) {
    delCookie(name);
    expires = 30;
    var exp = new Date();
    path = "/";
    exp.setTime(exp.getTime() + expires * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + "; expires=" + exp.toGMTString() + "; path=" + path;
}
function delCookie(name) {
    var name = escape(name);
    var path = "/";
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) {
        document.cookie = name + "=" + ";expires=" + exp.toUTCString() + ";path=" + path;
    }
} 
function getRequest(url) {        
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
		}
	}
	return theRequest;
}	