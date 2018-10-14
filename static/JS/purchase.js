
// 购买数量按钮
new Vue({
	el:".add",
	data:{
		value:1	
	},
	methods:{
		add(){
			this.value++;
		},
		reduce(){
			if(this.value<1)
				value=1;
			else
				this.value--; 
		}	
	}
})

// 更换图片
$(".mid-img").click(function(e){
	var $tar=$(e.target);
    if($tar.is("img")){
      $tar.clone().replaceAll(".img-main>img");
    }
})

// 套餐选项选中功能
$(".set-meal  span").click(function(e) {
	$this=e.target;
	e.preventDefault();
	$(this).addClass('check-border');
	$('.set-meal span').not($(this)).removeClass('check-border');
});

$(".select a span").click(function(e) {
	$this=e.target;
	e.preventDefault();
	$(this).addClass('check-border');
	$('.select a span').not($(this)).removeClass('check-border');
});

/*评论部分js*/
$(".tabs>li")
.on("click","[data-toggle=tab]",e=>{
	var $tar=$(e.target);
	e.preventDefault();
		if(!$tar.parent().is(".active")){
			$tar.parent().addClass("active")
  			.siblings().removeClass("active");
	var id=$tar.attr("href");
	$(id).addClass("active")
  		.siblings().removeClass("active");
 
	}
})

// 右边推荐轮播图
var move=1;
var move_length=182;
function nextimg(){
	$("#right-swiper").animate({top:-move_length*move}, 0);
 	move++;
 	if(move>5){
 		move=1;
 	}
}
var timer;
timer=setInterval (function(){
	nextimg();
},4000);








