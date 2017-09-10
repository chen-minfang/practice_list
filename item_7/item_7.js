// JavaScript Document
$(document).ready(function(e) {
	var mouseDown = false;
	var mouseUp = false;
	var left = parseInt($('#cInner #btn').css('left'));
	var leftDown;
	var leftMove;
	var leftNow;
    $(document).mousedown(function (e) {
		if ($(e.target).is($('#cInner #btn'))) {
			e.preventDefault();
			mouseDown = true;
			leftDown = e.clientX;
			leftNow = parseInt($('#cInner #btn').css('left'))
		}
	})
	.mousemove(function(e) {
		if (mouseDown && !mouseUp) {
			leftMove = leftNow + e.clientX - leftDown;
			if (leftMove <= left) {
				$('#cInner #btn').css('left', left + 'px')	
			}
			else if (leftMove <= left + 262) {
				$('#cInner #btn').css('left', leftMove + 'px')
			}
			else {
				$('#cInner #bg').attr('src', 'imgs/2.jpg')
				$('#cInner #btn').hide()
			}			
		}
    })
	.mouseup(function (e) {
		mouseUp = true
		if (mouseDown && mouseUp) {
			leftNow = parseInt($('#cInner #btn').css('left'));
			if (leftNow <= 134 + left) {
				$('#cInner #btn').css('left', left + 'px')	
			}
			else {
				$('#cInner #btn').css('left', left + 262 + 'px')
				$('#cInner #bg').attr('src', 'imgs/2.jpg')
				$('#cInner #btn').hide()	
			}
			mouseDown = false
			mouseUp = false
		}
	})
});