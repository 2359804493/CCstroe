
//01 用户名：onblur 事件
      function showusername(){
              //1.创建异步对象
            var xhr=createXhr();
            //2.监听事件
            xhr.onreadystatechange=function(){ 
             if(xhr.readyState==4&&xhr.status==200){
               var res=xhr.responseText;
              $("#showusername").html(res);
             }
          }
            //3.打开连接
            var uname=$("#uname").val();
            xhr.open('get','/user/checkUname?uname='+uname,true); 
            //4.发送请求 
          xhr.send(null);           
    }
      // onfocus事件
      function reminduname(){
         $("#showusername").html("请输入账号");
     }
//02. 密码：onblur 事件
          function showuserpwd(){
           //1.创建异步对象
          var xhr=createXhr();
          //2.监听事件
          xhr.onreadystatechange=function(){ 
           if(xhr.readyState==4&&xhr.status==200){
             var res=xhr.responseText;
             $("#showuserpwd").html(res); 
           }
        }
          //3.打开连接
          var upwd=$("#upwd").val();
          //4.发送请求
          xhr.open('get','/user/checkUpwd?upwd='+upwd,true);
          xhr.send(null);
         }
        // onfocus事件
         function remindupwd(){
              $("#showuserpwd").html("请输入八位密码"); 
         }
         
//03. 异步登陆按钮
      function login(){
        //1.创建异步对象
        var xhr=createXhr();
        //2.监听事件
        xhr.onreadystatechange=function(){ 
         if(xhr.readyState==4&&xhr.status==200){
           var res=xhr.responseText;
           var res1=res;
           console.log(res);
           res=res.split(",")[0].split(':')[1];
           var uname=res1.split(",")[1].split(':')[1].slice(1).slice(0,-2);
          //  uname=uname.splice(-2,2);
           console.log(uname);
           if(res==1){
              alert("登陆成功！");
              var storage=window.localStorage;
              storage.setItem("uname",uname);
              location.href="http://localhost:3000/index.html?isLogin=1";
           }else if(res==0){
              alert("登录失败，检查用户名和密码！");
           }    
         }
      }
        //3.打开连接
        var uname=$("#uname").val();
        var upwd=$("#upwd").val();
        xhr.open("post",'/user/login',true); 
        //4.发送请求
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        var formdata="uname="+uname+"&upwd="+upwd;
        xhr.send(formdata);
      }