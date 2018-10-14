
   if(location.search.indexOf('lid=')!=-1){
	    var lid = location.search.split('=')[1];
   }else{
	 	lid=null;
	}
  $.ajax({ 
	  	type:"get",
	    url:"http://localhost:3000/goods/search",
	    data:`lid=${lid}`,
	    dataType:"json",
		   success:function(result){
			var {title,details,price,former_price,count,sold_count}=result;

			//标题
			var titlebar=$("#good-title");
			var html1=`<h3>${title}</h3>
					  <h4>${details}</h4>`;
			titlebar.html(html1+titlebar.html());

			//价格
			var pricebar=$("#good-price");
			var html2=`<div class="formale-price">价格<span>￥${former_price}</span></div>
				<div class="now-price">促销价 <span>￥${price}</span></div>`;
			pricebar.html(html2+pricebar.html());

			//销售量
			var appraise=$("#appraise");
			var html3=`<p>月销量<span> ${sold_count}</span></p>`;
			appraise.html(html3+appraise.html());

			//库存
			var numberbar=$("#good-number");
			var html4=`<span>库存 ${count} 件</span>`;
			numberbar.html(html4+numberbar.html());
			
	      }

   });




