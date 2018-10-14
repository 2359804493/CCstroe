if(location.search.indexOf('isLogin=')!=-1){
	var status = location.search.split('=')[1];
	console.log("登录状态"+status);
	$("#user-login").hide();
	$("#suprise").hide();
}else{
	status=0;
}
var storage=window.localStorage;
var uname=storage.getItem("uname");

var showusername=$("#showusername")
var html=`<span>欢迎${uname}来到CC果园~</span>`;
showusername.html(html);
