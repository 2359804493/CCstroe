// 1.注册验证用户名是否可用
      var unamecheck=false;  //全局变量，控制注册按钮
      var upwdcheck=false;
	  //异步请求：检查用户名称是否存在
	  // onblur事件
	  function regcheckUname(){
	    //1.创建xhr
		var xhr=createXhr();
		//2.监听
        xhr.onreadystatechange=function(){
		  if(xhr.readyState==4&&xhr.status==200){
		    var res=xhr.responseText;
			if(res==1)
			  {
			    $("#checkUname").html("用户名通过");
				unamecheck=true;
			  }else{
			    $("#checkUname").html("请重新输入用户名");
				unamecheck=false;
			  }
		  }
		}
		//3.打开连接
		var uname=$('#uname').val();
		console.log(uname);
		xhr.open("get","/user/regcheckUname?uname="+uname,true);
		//4.发送请求
		xhr.send(null);
	  }

	  // onfocus事件
	  function reminduname(){
	  	 $("#checkUname").html("请重新输入8位有效用户名");
	  }


// 2.确认密码
	 //2.密码验证
	   function regcheckUpwd(){
	   	 //1.创建异步对象
		  var xhr=createXhr();
		  //2.监听事件
		  xhr.onreadystatechange=function(){ 
		   if(xhr.readyState==4&&xhr.status==200){
		     var res=xhr.responseText;
		     $("#checkUpwd").html(res);
		   }
		}
		  //3.打开连接
		  var upwd=$("#upwd").val();
		  xhr.open('get','/user/regcheckUpwd?upwd='+upwd,true); 
		  //4.发送请求
		  xhr.send(null);
	   }

	   // onfocus事件
	  function remindupwd(){
	  	 $("#checkUpwd").html("请重新输入8位数字密码");
	  }


	   //确认重新输入的密码
	    function regcheckcpwd(){
	      //1.创建异步对象
		  var xhr=createXhr();
		  //2.监听事件
		  xhr.onreadystatechange=function(){ 
		   if(xhr.readyState==4&&xhr.status==200){
		     var res=xhr.responseText;
		     if(res==1){
		     	 $("#checkcpwd").html("密码通过");
		     	 upwdcheck=true;
		     }else{
		     	 $("#checkcpwd").html("两次密码输入不一致");
		     	 upwdcheck=false;
		     }
		   }
		}
		  //3.打开连接
		  var upwd=$("#upwd").val();
		  var cpwd=$("#cpwd").val();
		  xhr.open('get','/user/regcheckcpwd?upwd='+upwd+'&cpwd='+cpwd,true); 
		  //4.发送请求
		  xhr.send(null);
	   }
	  
// 3.提交按钮
	  function register(){
	    if(unamecheck==true&&upwdcheck==true){
		  //异步注册
		  //1.创建异步xhr
           var xhr=createXhr();
		  //2.监听事件
		  xhr.onreadystatechange=function(){
		   if(xhr.readyState==4&&xhr.status==200){
		     var res=xhr.responseText;
		     if(res==1)
			 alert("注册成功！");
			 location.href="http://localhost:3000/login.html";
		   }
		  }
		  //3.打开连接
		  xhr.open("post","/user/register",true);
		  //4.发送请求
		  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
          var uname=$("#uname").val();
		  var upwd=$("#upwd").val();
		  var url="uname="+uname+"&upwd="+upwd;
		  xhr.send(url);
		}else{
		  alert("请检查注册信息");
		}
	  }

	  var Vm=new Vue({
        el:".form",
        data:{
         	agree:false
        },
        methods:{
          // 回车键搜索
          search_btn(){
          	 $("#submit").onclick=register();	 
          },
          keyup(){
          	$("#submit").click()
          }
        }
      })
