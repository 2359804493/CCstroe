const mysql=require('mysql');
//连接MySQL数据库模块
var pool=mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'',
	database:'CCstore',
	connectionLimit:10
});
// 导出连接数据库
module.exports=pool;