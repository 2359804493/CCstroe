var Vm;
$(function(){
  $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
  $.ajax({
    url:"header.html",
    type:"get",
    success:function(res){
      $(res).replaceAll("#header");

      var status;
    //地址栏截状态
      if(location.search.indexOf('isLogin=')!=-1){
        status=location.search.split('=')[1];
     }else{
       status=0;
    }

      Vm=new Vue({
        el:".header",
        data:{
          islogin:status,
   		    keyword:""
        },
        methods:{
          logout(){
            status=0;
            var storage=window.localStorage;
            var uname=storage.getItem("uname");
            uname=null;
          
            location.href=`http://localhost:3000/index.html?kw=status`
          },
          //回车键搜索
          search_btn(){
          	 var $input=$("#search");
          	 location.href=`http://localhost:3000/purchase.html?kw=${$input.val().trim()}`
          },
          keyup(){
          	$("#search_btn").click()
          }
        }
      })

    }
  })
})
