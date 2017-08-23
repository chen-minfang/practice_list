// JavaScript Document
$(document).ready(function(e) {
	var startF = true;
	var timer;
	var minu;
	var sec;
	function formalize(num) {
		if(num.toString().length < 2) {
			return '0' + num	
		} else {
			return num	
		}
	}
    $('#button').click(
		function() {
			if (startF) {
				$(this).css('background-position', '0 -50px');
				minu = parseInt($('#minu').text());
				sec = parseInt($('#sec').text());
				timer = setInterval(
					function() {
						sec--;
						if(minu === 0 && sec < 0) {
							sec = 0;
							$('#sec').html(formalize(sec));
							$('#minu').html(formalize(minu))
							clearInterval(timer)
						}
						if(sec < 0) {
							sec = 59;
							minu = minu - 1;	
						}
						$('#sec').html(formalize(sec));
						$('#minu').html(formalize(minu))
					},1000
				)
			} else {
				$(this).css('background-position', '0 0');
				clearInterval(timer)
			}
			startF = !startF;			
		}
	)
});