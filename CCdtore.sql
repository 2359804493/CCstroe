DROP DATABASE IF EXISTS CCstore;
CREATE DATABASE CCstore;
USE CCstore;

/**水果属性**/
CREATE TABLE fruit_details(
  lid INT PRIMARY KEY AUTO_INCREMENT,  #编号
  family VARCHAR(10),         #所属类型
  title VARCHAR(128),         #【主标题】水果名字
  details VARCHAR(128),      #【副标题】水果描述
  price DECIMAL(10,2),        #价格
  former_price DECIMAL(10,2), #以前的价格
  count VARCHAR(64),          #数量
  category VARCHAR(32),       #所属分类
  shelf_time BIGINT,          #上架时间
  sold_count INT,             #已售出的数量
  is_onsale BOOLEAN,          #是否促销中
  sm VARCHAR(128),            #小图片路径
  md VARCHAR(128),            #中图片路径
  lg VARCHAR(128)             #大图片路径          
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/**水果图片**/
CREATE TABLE fruit_Pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,   #编号
  fruit_id INT,              #编号
  sm VARCHAR(128),            #小图片路径
  md VARCHAR(128),            #中图片路径
  lg VARCHAR(128)             #大图片路径
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/**用户信息**/
CREATE TABLE CCstore_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),    #用户名
  upwd VARCHAR(32),     #密码
  email VARCHAR(64),    #email
  phone VARCHAR(16),    #电话

  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT                  #性别  0-女  1-男
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/**水果分类**/
CREATE TABLE CCstore_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/**收货地址信息**/
CREATE TABLE user_address(
  aid INT PRIMARY KEY AUTO_INCREMENT,  #编号
  user_id INT,                #用户编号
  receiver VARCHAR(16),       #接收人姓名
  province VARCHAR(16),       #省
  city VARCHAR(16),           #市
  county VARCHAR(16),         #县
  address VARCHAR(128),       #详细地址
  cellphone VARCHAR(16),      #手机
  fixedphone VARCHAR(16),     #固定电话
  postcode CHAR(6),           #邮编
  tag VARCHAR(16),            #标签名
  is_default BOOLEAN          #是否为当前用户的默认收货地址
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/****首页商品****/
CREATE TABLE fruit_index(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),      #标题
  details VARCHAR(128),     #描述详情
  pic VARCHAR(128),   #图片
  price DECIMAL(10,2),    #价格
  former_price DECIMAL(10,2), #以前价格
  href VARCHAR(128),    #链接
  sold_count INT        #销售数量
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

/**导入水果属性数据**/
INSERT INTO fruit_details VALUES
(1,2,'越南小青芒5斤装','越南进口 乐享热带甜蜜滋味',5.00,5.50,1000,'进口水果','0806',500,true,,'img/product/sm/57b12a31N8f4f75a3.jpg','img/product/md/57b12a31N8f4f75a3.jpg','img/product/lg/57b12a31N8f4f75a3.jpg'),
(2,1,'四川攀枝花大芒果','新鲜包邮拍2件整箱10斤当季青芒',6.00,5.50,1000,'夏季水果','0806',500,true,'img/product/sm/57b12a31N8f4f75a3.jpg','img/product/md/57b12a31N8f4f75a3.jpg','img/product/lg/57b12a31N8f4f75a3.jpg'),
(3,1,'广西百香果','鸡蛋果现摘5斤精装大红果酸爽香甜',7.00,5.50,1000,'夏季水果','0806',500,true,'img/product/sm/57b12a31N8f4f75a3.jpg','img/product/md/57b12a31N8f4f75a3.jpg','img/product/lg/57b12a31N8f4f75a3.jpg'),
(4,2,'红心火龙果 ','金都红肉火龙果10斤新鲜水果批发包邮现摘现发',5.00,5.50,1000,'进口水果','0806',500,true,'img/product/sm/57b12a31N8f4f75a3.jpg','img/product/md/57b12a31N8f4f75a3.jpg','img/product/lg/57b12a31N8f4f75a3.jpg'),
(5,2,'澳洲进口脐橙','新鲜水果10个包邮澳大利亚冰糖橙',8.00,5.50,1000,'进口水果','0806',500,true,'img/product/sm/57b12a31N8f4f75a3.jpg','img/product/md/57b12a31N8f4f75a3.jpg','img/product/lg/57b12a31N8f4f75a3.jpg'),
(6,2,'越南进口香水菠萝','包邮菠萝净重8斤带箱9斤现摘',9.00,5.50,1000,'夏季水果','0806',500,true,'img/product/sm/57b12a31N8f4f75a3.jpg','img/product/md/57b12a31N8f4f75a3.jpg','img/product/lg/57b12a31N8f4f75a3.jpg'),
(7,1,'新鲜草莓水果大草莓','【莓味道】 4盒顺丰包邮 28粒装',10.00,5.50,1000,'夏季水果','0806',500,true,'img/product/sm/57b12a31N8f4f75a3.jpg','img/product/md/57b12a31N8f4f75a3.jpg','img/product/lg/57b12a31N8f4f75a3.jpg'),
(8,1,'杨梅新鲜冰冻水果','3斤包邮顺丰农家野生现摘现发冷冻',11.00,5.50,1000,'夏季水果','0806',500,true,'img/product/sm/57b12a31N8f4f75a3.jpg','img/product/md/57b12a31N8f4f75a3.jpg','img/product/lg/57b12a31N8f4f75a3.jpg'),
(9,1,'新鲜脆甜烟台红富士','栖霞苹果整一箱批发10斤包邮山东苹果',12.00,5.50,1000,'夏季水果','0806',500,true,'img/product/sm/57b12a31N8f4f75a3.jpg','img/product/md/57b12a31N8f4f75a3.jpg','img/product/lg/57b12a31N8f4f75a3.jpg'),
(10,2,'美国进口车厘子樱桃','2斤装9.5R大果新鲜孕妇水果顺丰空运包邮',13.00,5.50,1000,'进口水果','0806',500,true,'img/product/sm/57b12a31N8f4f75a3.jpg','img/product/md/57b12a31N8f4f75a3.jpg','img/product/lg/57b12a31N8f4f75a3.jpg'),
(11,1,'水蜜桃 水果 新鲜 ','现摘正宗无锡水密桃5-6两非阳山龙泉驿桃子现货',14.00,5.50,1000,'夏季水果','0806',500,true,'img/product/sm/57b12a31N8f4f75a3.jpg','img/product/md/57b12a31N8f4f75a3.jpg','img/product/lg/57b12a31N8f4f75a3.jpg'),
(12,1,'硒砂瓜宁夏西瓜','沙漠新鲜水果石头瓜现摘现发14斤包邮压砂西瓜甜瓜',15.00,5.50,1000,'夏季水果','0806',500,true,'img/product/sm/57b12a31N8f4f75a3.jpg','img/product/md/57b12a31N8f4f75a3.jpg','img/product/lg/57b12a31N8f4f75a3.jpg'),
(13,1,'荔枝 新鲜水果',' 冷冻荔枝 黑叶 妃子笑 桂味 孕妇水果5斤 顺丰包邮',16.00,5.50,1000,'夏季水果','0806',500,true,'img/product/sm/57b12a31N8f4f75a3.jpg','img/product/md/57b12a31N8f4f75a3.jpg','img/product/lg/57b12a31N8f4f75a3.jpg');

/**导入商城水果图片**/
INSERT INTO fruit_Pic VALUES
(NULL, 1, 'img/product/sm/57b12a31N8f4f75a3.jpg','img/product/md/57b12a31N8f4f75a3.jpg','img/product/lg/57b12a31N8f4f75a3.jpg'),
(NULL, 1, 'img/product/sm/57ad359dNd4a6f130.jpg','img/product/md/57ad359dNd4a6f130.jpg','img/product/lg/57ad359dNd4a6f130.jpg');
/**导入用户信息**/
INSERT INTO CCstore_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', 'img/avatar/default.png', '丁伟', '1'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '林当', '1'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', '1'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', '0'),
(NULL, 'king', '123456', 'king@qq.com', '13124534560', 'img/avatar/default.png', 'King', '1'),
(NULL, 'tom', '123456', 'tom@qq.com', '13314534560', 'img/avatar/default.png', 'Tom', '0');

/**导入水果分类**/
INSERT INTO CCstore_family VALUES
(NULL,'夏季水果'),
(NULL,'特惠水果'),
(NULL,'热带水果'),
(NULL,'进口水果'),
(NULL,'果篮类'),
(NULL,'坚果类'),
(NULL,'浆果类'),
(NULL,'核果类'),
(NULL,'其他');

/****导入首页商品****/
-- INSERT INTO fruit_index VALUES
-- (1,2,'越南小青芒5斤装','越南进口 乐享热带甜蜜滋味','图片',5.00,5.50,1000,'链接',500),
-- (2,1,'四川攀枝花大芒果','新鲜包邮拍2件整箱10斤当季青芒','图片',6.00,5.50,1000,'链接',500);
