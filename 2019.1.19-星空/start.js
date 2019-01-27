//加载完毕
window.onload = function(){
	//获取窗口的宽度、高度,可视窗口
	var screenW = document.documentElement.clientWidth
	var screenH = document.documentElement.clientHeight
//	console.log(screenW,screenH)
	//隐藏滚动条
	document.body.parentNode.style.overflowX = 'hidden'
	document.body.parentNode.style.overflowY = 'hidden'

	//随机出现
	//创建星星
	//i就是星星的个数
	for (var i = 0 ; i < 200 ; i ++) {
		//存放星星的容器
		var span = document.createElement("span")
		//星星添加在body上面
		document.body.appendChild(span)
		
		//	星星位置的设置,x,y值
		var x = parseInt(Math.random() * screenW)
		var y = parseInt(Math.random() * screenH)
		//随机位置
		span.style.top = y + 'px'
		span.style.left = x + 'px'
		//星星大小不一,放大1.5倍
		var scale = Math.random() * 1.5
		span.style.transform = 'scale(' + scale + ',' + scale + ')'
		
	}
}


//思路分析：
//视觉范围内都有星星