// JavaScript Document
$(document).ready(function(e) {
	var $move = $('#move');
	var width;
	var height;
	var left;
	var top;
	var right;
	var bottom;
    $('body').keydown(
		function(e) {
			e.preventDefault();
			width = $move.width();
			height = $move.height();
			if(e.ctrlKey) {
				switch(e.keyCode) {
					case 49:
						$move.css('background-color', '#090');
						break;
					case 97:
						$move.css('background-color', '#090');
						break;
					case 50:
						$move.css('background-color', '#FF0');
						break;
					case 98:
						$move.css('background-color', '#FF0');
						break;
					case 51:
						$move.css('background-color', '#009');
						break;
					case 99:
						$move.css('background-color', '#009');
						break;
					case 38:
						$move.css(
							{
								'width': width + 10 + 'px',
								'height': height + 10 + 'px',
								'top': parseInt($move.css('top')) - 5 + 'px',
								'left': parseInt($move.css('left')) - 5 + 'px'
							}
						);
						break;
					case 40:
						$move.css(
							{
								'width': width - 10 + 'px',
								'height': height - 10 + 'px',
								'top': parseInt($move.css('top')) + 5 + 'px',
								'left': parseInt($move.css('left')) + 5 + 'px'
							}
						);
						break;						
				}
			}
			else {
				switch(e.keyCode) {
					case 37:
						left = parseInt($move.css('left'));
						left > 0 ? $move.css('left', left - 5 + 'px') : $move.css('left', 0);
						break;
					case 38:
						top = parseInt($move.css('top'));
						top > 0 ? $move.css('top', top - 5 + 'px') : $move.css('top', 0);
						break;
					case 39:
						right = $(window).width() - width;
						left = parseInt($move.css('left'));
						left < right ? $move.css('left', left + 5 + 'px') : $move.css('left', right + 'px');
						break;
					case 40:
						bottom = $(window).height() - height;
						top = parseInt($move.css('top'));
						top < bottom ? $move.css('top', top + 5 + 'px') : $move.css('top', bottom + 'px');
						break;	
				}
			}
		}
	)
});