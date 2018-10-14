function countDown(times){
  var timer=null;
  timer=setInterval(function(){
    var day=0,
      hour=0,
      minute=0,
      second=0;//时间默认值
    if(times > 0){
      day = Math.floor(times / (60 * 60 * 24));
      hour = Math.floor(times / (60 * 60)) - (day * 24);
      minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
      second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
      document.getElementById("time1").innerHTML=`${day}天${hour}小时${minute}分${second}秒`;
      document.getElementById("time2").innerHTML=`${day}天${hour}小时${minute}分${second}秒`;
      document.getElementById("time3").innerHTML=`${day}天${hour}小时${minute}分${second}秒`;
      document.getElementById("time4").innerHTML=`${day}天${hour}小时${minute}分${second}秒`;
      document.getElementById("time5").innerHTML=`${day}天${hour}小时${minute}分${second}秒`;
    }
    else{
      clearInterval(timer);
      document.getElementById("time1").innerHTML="本期商品抢购结束！";
      document.getElementById("time2").innerHTML="本期商品抢购结束！";
      document.getElementById("time3").innerHTML="本期商品抢购结束！";
      document.getElementById("time4").innerHTML="本期商品抢购结束！";
      document.getElementById("time5").innerHTML="本期商品抢购结束！";
  }
    if (day <= 9) day = '0' + day;
    if (hour <= 9) hour = '0' + hour;
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    // console.log(day+"天:"+hour+"小时："+minute+"分钟："+second+"秒");
    times--;
  },1000); 
}
// 秒数
var newDate=new Date('2018/11/10 21:00:00');
var nowDate=new Date();
var seconds=parseInt(newDate-nowDate)/1000;
console.log(seconds);
countDown(seconds); 
