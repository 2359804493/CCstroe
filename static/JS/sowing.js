
		var banner = new FragmentBanner({
		container : "#banner1",//选择容器 必选
		imgs : ['img/banner1.png','img/banner2.png','img/banner1.jpg'],//图片集合 必选
		size : {
			width : 900,
			height : 460
		},//容器的大小 可选
		//行数与列数 可选
		grid : {
			line : 12,
			list : 14
		},
		index: 0,//图片集合的索引位置 可选
		type : 2,//切换类型 1 ， 2 可选
		boxTime : 3000,//小方块来回运动的时长 可选
		fnTime : 6000//banner切换的时长 可选
	});