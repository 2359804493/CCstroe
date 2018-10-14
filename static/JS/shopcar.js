// 商品数量按钮
var count=$(".count");
var number=parseInt(count.val());
$(".plus").on("click",function(){
   number+=1;
   count.val(number);
   var totalprice=$(".total-price");
   var goodprice=parseFloat($(".now_price span").html());
   var tolprice=parseFloat(number*goodprice);
   totalprice.html(tolprice);  
});
$(".reduce").on("click",function(){
    if(number<1){
        number=0;
    }else{
        number+=-1;
        count.val(number);
    } 
    //  商品价格
    var totalprice=$(".total-price");
    var goodprice=parseFloat($(".now_price span").html());
    var tolprice=parseFloat(number*goodprice);
    totalprice.html(tolprice);  
 });

//  全选按钮
$("#checkAll").click(function(e){
 console.log($("#checkAll").attr("check","checked"));
    // if($("#checkAll").attr("check","checked")==true){
    //     console.log(1);
       
    // }else{
    //     console.log(0);
    // }
})




