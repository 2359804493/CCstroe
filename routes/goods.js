const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/search",(req,res)=>{
	var lid=req.query.lid;
	var obj={
		product:{},
		specs:[]
	};
	 //1. 按lid查询商品信息——异步
 	var sql="SELECT * FROM fruit_details where lid=?";
  	pool.query(sql,[lid],(err,result)=>{
        if(err) console.log(err);
        obj.product=result[0];
        res.send(obj.product);
        console.log(obj.product);
  })
})


module.exports=router; 