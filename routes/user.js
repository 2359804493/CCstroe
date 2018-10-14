//引入express
const express =require ('express');
//引入自定义模块
const pool = require ('../pool.js');
//搭建路由
const router =express.Router();


//1.用户登录
	//01 检查用户名称是否为空
	router.get('/checkUname',(req,res)=>{
	  var $uname=req.query.uname;
	//   res.writeHead(200,{
	// 	"Content-Type":"application/json;charset=utf-8",
	// 	"Access-Control-Allow-Origin":"*"
	// }); //跨域问题
	  if(!$uname){ 
	  	res.send('用户名称不能为空');
	  }
	  else{res.send('用户名通过');
	 }
	});

	//02 密码验证
	router.get('/checkUpwd',(req,res)=>{
		var obj=req.query;
		var $upwd=obj.upwd;
		if(!$upwd){
			res.send('密码不能为空');
		}else{
			res.send('密码通过');
		}
	 });
	// 登录提交
	router.post('/login',(req,res)=>{
	  var $uname=req.body.uname;
		var $upwd=req.body.upwd;
		var uid=req.body.uid;
	  //检查数据库，判断用户名是否存在
	  var sql="select * from CCstore_user where uname=? and upwd=?";
	  pool.query(sql,[$uname,$upwd],(err,result)=>{
			if(err) throw err;
			console.log(result);
		if(result.length>0){
			// req.session.uid=res[0].uid;
			res.send({success:1,uname:$uname});//登陆成功
		}else{
		  res.send('0');//密码或者用户名错误
		}
	  });
	})
// 判断是否登录
	router.get('/islogin',(req,res)=>{
		if(req.session.uid!==undefined){
			var uid=req.session.uid;
			var sql="selsect * from ccstore_user where uid=?";
			pool.query(sql,[uid],(err,result)=>{
				if (err) console.log(err);
				res.send({sucess:"登陆成功！！",uname:res[0].uname})
			})		
		}else{
				res.send({fault:"登录失败"});
		}
	})
	//注销登录
	router.get('/logout',(req,res)=>{
		req.session.uid=undefined;
		res.send();
	})


// 2.用户注册
	//01 检查用户名称是否为空
	router.get('/regcheckUname',(req,res)=>{
	  var $uname=req.query.uname;
	  if(!$uname){
	    res.send('用户名称不能为空');
		return;
	  }
	  //检查数据库，判断用户名是否被占
	  var sql="select * from CCstore_user where uname=?";
	  pool.query(sql,[$uname],(err,result)=>{
	    if(err) throw err;
		if(result.length>0){
		  res.send('0');//用户名重复
		}else{
		  res.send('1');//用户名可用
		}
	  });
	});
	//02 密码验证
	router.get('/regcheckUpwd',(req,res)=>{
		var obj=req.query;
		var $upwd=obj.upwd;
		if(!$upwd){
			res.send('密码不能为空');
		}else{
			res.send('密码通过');
		}
	 });

	//确认重新输入的密码
	router.get('/regcheckcpwd',(req,res)=>{
		var obj=req.query;
		var $cpwd=obj.cpwd;
		if(!$cpwd){
			res.send('密码不能为空');
			return;
		}
		var $upwd=obj.upwd;
		if($upwd!=$cpwd){
			res.send('0');
		}else{
			res.send('1');
		}
	});
// 用户注册提交按钮
	router.post('/register',(req,res)=>{
		var obj=req.body;
		var $upwd=obj.upwd;
		var $uname=obj.uname;
		var sql="insert into CCstore_user set ?";
		pool.query(sql,obj,(err,result)=>{
			if (err) throw err;
			if(result.affectedRows>0){
				res.send('1');
			}else{
				res.send('0');
			}
		});		
	});


//导出路由
module.exports=router;


