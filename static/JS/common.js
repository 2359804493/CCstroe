
//异步对象创建
function createXhr(){
   var xhr=null;
   if(window.XMLHttpRequest){
     xhr=new XMLHttpRequest();
   }else{
     xhr=new ActiveXObject("Microsoft.XMLHttp");
   }
   return xhr;
};