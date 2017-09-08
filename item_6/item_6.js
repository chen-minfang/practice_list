// JavaScript Document
$(document).ready(function () {
	var position = false;
	var track = false;
	var left;
	var top;
	var mouseX;
	var mouseY;
	var speedX;
	var speedY;
	var mouseXArr = [];
	var mouseYArr = [];
	var mouseDown = false;
	var mouseUp = false;
	$('#container button').eq(0).click(function (event) {
		$(this).text('根据鼠标点击位置移动(已激活)')
			   .siblings('button').text('根据鼠标轨迹移动')
			   .siblings('p').text('鼠标点击页面，人物将移动至鼠标位置。')
		position = true;
		track = false;
	})
	$('#container button').eq(1).click(function (event) {
		$(this).text('根据鼠标轨迹移动(已激活)')	
	           .siblings('button').text('根据鼠标点击位置移动')
			   .siblings('p').text('按住鼠标左键，在页面划动，人物将按照鼠标轨迹移动。')
		track = true;
		position = false;
	})
	$(document).click(function (event) {
		if (position && !$(event.target).is($('#container button').eq(0))) {
			left = parseInt($('#container img').css('left'))
			top = parseInt($('#container img').css('top'))
			mouseX = event.clientX;
			mouseY = event.clientY;
			speedX = (mouseX - left) / 5
			speedY = (mouseY - top) / 5
			$('#container img').attr('src', 'imgs/2.gif')
			var timer = setInterval(function () {
				$('#container img').css(
					{
						left: parseInt($('#container img').css('left')) + speedX + 'px',
						top: parseInt($('#container img').css('top')) + speedY + 'px'
					}
				)
				if (speedX > 0 ? parseInt($('#container img').css('left')) >= mouseX : parseInt($('#container img').css('left')) <= mouseX) {
					clearInterval(timer)
					$('#container img').css(
						{
							left: mouseX + 'px',
							top: mouseY + 'px'
						}
					).attr('src', 'imgs/1.gif')
				}
			}, 50)
		}
	})
	$(document).mousedown(function () {
		track ? mouseDown = true : mouseDown = false
	})
	$(document).mousemove(function (event) {
		if (track && mouseDown && mouseUp) {
			mouseXArr.push(event.clientX)
			mouseYArr.push(event.clientY)
		}
	})
	$(document).mouseup(function () {
		if(mouseXArr.length > 0) {
			var timer = setInterval(function () {
				$('#container img').css(
					{
						left: mouseXArr.shift() + 'px',
						top: mouseYArr.shift() + 'px'
					}
				)
				if(mouseXArr.length == 0) {
					clearInterval(timer)
					mouseDown = false	
				}
			}, 50)
		}
	})
})