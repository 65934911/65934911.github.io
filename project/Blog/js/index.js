//音乐播放
$(function(){
	//play 和 pause 事件
	//使用on监听事件
	$('#musicPlayer').on('play',function(){
		console.log('playing')
		//转动
		$('#musicImg').css("animation-play-state","running");
	})
	$('#musicPlayer').on('pause',function(){
//		console.log('paused')
//		停止转动
		$('#musicImg').css('animation-play-state','paused')
	})
	
	//切歌
	$('.glyphicon-play-circle').on('click',function(){
//		console.log($(this)[0])
//		console.log($(this).data())
		//获取音乐
		var music = $(this).data('music')
		//获取图片
		var img = $(this).data('img')
//		console.log($('#musicPlayer').prop('src'))
		$('#musicPlayer').attr('src',music)
//		console.log($('#musicPlayer').prop('src'))	
//		console.log($('#musicImg').prop('src'))
		$('#musicImg').attr('src',img)
//		console.log($('#musicImg').prop('src'))
//		自动播放
		$('#musicPlayer')[0].play()
		
		//图片转动
		$('#musicImg').css('animation-play-state','running')

	})
	//点击高亮
	$('.high li a').on('click',high)
	function high(){
		var $aList = $('.high li a')
//		console.log($aList)
		$aList.css({
			backgroundColor :'transparent'
		})
//		console.log($(this))
		$(this).css({
			backgroundColor : '#e7e7e7'
		})
	}
})
