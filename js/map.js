//创建地图对象
var map = new AMap.Map('myMap', {
	center: [113.34, 23.15]
})
//创建水院标记
var marker = new AMap.Marker({
	position: [113.3351540565, 23.1457563879],
	map: map
})
//出现对应的信息
//1.获取信息
$.getJSON('data/map.json', null, function(result) {
	marker.on('click', function() {
		openInfo(result)
	})
})

function openInfo(obj) {
	//信息数组
	var info = []
	info.push("<div><div> <img style=\"float:left;\"  src=\"" +
		obj.schoolBadge + "\"/> </div>")
	info.push("</br>")
	info.push("</br>")
	info.push("</br>")
	
	info.push("<div style=\"padding:0 0 0 4px;\"><b>" + obj.name + "</b>");
	info.push("学校地址:" + obj.addr)
	info.push("学校代码:" + obj.schoolCode)
	info.push("学校邮编:" + obj.postcode)
	info.push("学校电话:" + obj.tel)
	info.push("</div>")
	//创建窗体对象
	infoWindow = new AMap.InfoWindow({
		//使用默认的信息窗体样式，用来显示信息内容
		//信息使用换行符连接
		content: info.join("<br/>")
	})
	//使用infoWindow对象打开窗口
	//参数一：地图
	//参数二：窗体位置
	infoWindow.open(map, [obj.map_longitude, +obj.map_latitude + 0.02])

}