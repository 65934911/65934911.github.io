// 导入express
let express = require('express')

// 创建express实例
let app = express()

// 通过如下代码就可以将 public 目录下的图片、CSS 文件、JavaScript 文件对外开放访问了：
// 访问的时候会跳过public文件夹，直接访问images文件夹
// 设置public文件夹的静态资源目录
app.use(express.static('public'))

// 路由，没什么用
// 测试使用
// app.get('/',(req,res) => { 
// 	res.send('success')
// })

// 监听端口
app.listen(8088,() => {
	console.log('the server running at http://127.0.0.1:8088 ')
})