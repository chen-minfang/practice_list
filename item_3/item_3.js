// JavaScript Document
$(document).ready(function(e) {
    var msg = [
		'差得太离谱，与卖家描述的严重不符，非常不满',
		'部分有破损，与卖家描述的不符，不满意',
		'质量一般，没有卖家描述的那么好',
		'质量不错，与卖家描述的基本一致，还是挺满意的',
		'质量非常好，与卖家描述的完全一致，非常满意'
	];
	var aConL = $('#aCon').outerWidth() / 2;
	var moveStep = $('#stars ul li').outerWidth(true);
	var index;
	var indexC;
	$('#stars ul li').hover(
		function() {
			index = $('#stars ul li').index(this);
			$(this).css('background-position', '0 0')
				   .siblings().css('background-position', '0 0');
			for (var i = 0; i <= index; i++) {
				$('#stars ul li').eq(i).css('background-position', '0 -28px');
			}
			$('#aCon').css('left', - aConL + (1/2 + index) * moveStep + 'px');			
			$('span.detail.down').html(msg[index]);
			$('span.count i').html(index + 1);
			$('#aCon').show()			
		},
		function() {
			$(this).css('background-position', '0 0')
				   .siblings().css('background-position', '0 0');
			for (var i = 0; i <= indexC; i++) {
				$('#stars ul li').eq(i).css('background-position', '0 -28px');
			}
			$('#aCon').hide()	
		}
	);
	$('#stars ul li').click(
		function () {
			indexC = $('#stars ul li').index(this);
			for (var i = 0; i <= indexC; i++) {
				$('#stars ul li').eq(i).css('background-position', '0 -28px');
			}
			$('span.rCount i').html(indexC + 1);
			$('span.detail.right').html('(' + msg[indexC] + ')');
			$('#exhArea p#result').show();
			$('#aCon').hide()
		}
	)
});