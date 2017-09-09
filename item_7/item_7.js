// JavaScript Document
$(document).ready(function(e) {
	var mouseDown = false;
	var left = parseInt($('#cInner #btn').css('left'));
	var leftDown;
    $('#cInner #btn').mousedown(function (e) {
		e.preventDefault();
		mouseDown = true;
		leftDown = e.clientX	
	})
	$(document).mousemove(function(e) {
		if (mouseDown && e.clientX >= leftDown && e.clientX - leftDown <= 262) {
        	$('#cInner #btn').css('left', left + e.clientX - leftDown + 'px')
		}
    });
});