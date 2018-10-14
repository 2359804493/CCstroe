const express =require('express');
//使用express路由器功能
var router=express.Router();
//使用数据库连接
const pool=require('../pool.js');


//1.查询商品列表
router.get('/list',(req,res)=>{
	var obj=req.query;
	console.log(obj);
	//转换输入数据为整型
	var $page=parseInt(obj.page);
	var $size=parseInt(obj.size);
	
	//判断是否为空
	if(!$page){
		$page=1; //默认为第一页
	}
	if(!$size){
		$size=5;  //默认值为显示五条信息
	}
	var $begin=($page-1)*$size;
	//查询数据库
	var sql='select * from xz_laptop limit ?,?';
	pool.query(sql,[$begin,$size],(err,result)=>{
		if (err) throw err;
		res.send(result);
	});
});


//2.添加商品信息
router.post('/add',(req,res)=>{
	var obj=req.body;
	//遍历对象，判断输入是否为空
	var i=400;
	for (var key in obj){
		//key 属性名---obj[key]
		i++;
		console.log(key+':'+obj[key]);
		if(!obj[key]){
			//向客户端发送对象
			res.send({code:i,msg:key+' is empty!'});
		}
	}
	obj.lid=null;
	//console.log(obj);
	var sql="insert into xz_laptop set ?" ;
	pool.query(sql,[obj],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('{code:200,msg:add sucess!}');
		}else{
			res.send('{code:400,msg:add err!}');
		}
	});

	// var $family_id=obj.family_id;    
	// var $title=obj.title;       
	// var $subtitle=obj.subtitle;     
	// var $price=obj.price;        
	// var $promise=obj.promise;      
	// var $spec=obj.spec;         
	// var $lname=obj.lname;        
	// var $os=obj.os;           
	// var $memory=obj.memory;       
	// var $resolution=obj.resolution;   
	// var $video_card=obj.video_card;   
	// var $cpu=obj.cpu;          
	// var $video_memory=obj.video_memory; 
	// var $category=obj.category;     
	// var $disk=obj.disk;         
	// var $details=obj.details;     
	// var $shelf_time=obj.shelf_time;   
	// var $sold_count=obj.sold_count;   
	// var $is_onsale=obj.is_onsale;
	// var sql=('insert into xz_laptop values(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?');
	// 	pool.query(sql,[$family_id,$title,$subtitle,$price,$promise,$spec,$lname,$os,$memory,$resolution,$video_card,
	// 		$cpu,$video_memory,$category,$disk,$details,$shelf_time,$sold_count,$is_onsale],(err,result)=>{
	// 		if (err) throw err;
	// 		if(result.affectedRows>0){
	// 			res.send({code:200,msg:'add sucess!'});
	// 		}
	// 	});
});


//3.删除商品
router.get('/delete',(req,res)=>{
	var obj=req.query;
	var $lid=obj.lid;
	if(!$lid){
		res.send('{code:401,msg:lid is empty!}');
		return;
	}
	var sql='delete from xz_laptop where lid=?';
	pool.query(sql,[$lid],(err,result)=>{
		if (err) throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:'delete sucess!'});
		}else{
			res.send({code:301,msg:'delete error!'});
		}		
	});
});


//4.索引商品
router.get('/search',(req,res)=>{
	var obj=req.query;
	var $lid=obj.lid;
	if(!$lid){
		res.send('{code:401,msg:lid is empty!}');
	}
	var sql='select * from xz_laptop where lid=?';
	pool.query(sql,[$lid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
			console.log(result);
		}else{
			res.send('{code:401,msg:search err!}')
		}
	});
});


//


//导出路由器
module.exports=router;