//导入模块
const express = require ('express');
const bodyparser=require('body-parser');
const session=require('express-session');
const cors=require('cors');

const user=require('./routes/user');
const goods=require('./routes/goods');
const product=require('./routes/product');
//创建服务器
const app =express();
//解决跨域问题
app.use(cors({
	origin:"http://localhost:3000"
}))
app.listen(3000,()=>{
	console.log('服务器创建成功~');
});
//
app.use(bodyparser.urlencoded({
	extended:false
}));
//

app.use(express.static('./static'));

//挂载配置session
app.use(session({
	secret:'keyboard cat',
	resave:false,
	saveUninitialized:true
}))
//把路由器挂载在/user下
app.use('/user',user);
//把路由器挂载在/product下
app.use('/product',product);
//把路由器挂载在/purchase下
app.use('/goods',goods);