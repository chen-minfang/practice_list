// JavaScript Document	
$(document).ready(function(e) {
	var areaString;
	var aLength;
	var oNum = $('#bCon b.num').text();
	var num;
	var hSrc;
	var uName;
	var date;
	var dateM;
	var dateD;
	var dateH;
	var dateMi;
	function formalize(num) {
		if(num < 10) {
			return '0' + num
		} else {
			return num	
		}
	}
	function commit() {
		cal();
		if($('#user input').val().length === 0) {
			alert('请填写您的姓名')	
		} else if($('#cHeader textarea').val().length === 0) {
			alert('随便说点什么吧')	
		} else if(num > oNum) {
			alert('你输入的内容已超出限制，请检查！')	
		} else {
			hSrc = $('#userH li.choosed img').attr('src');
			uName = $('#user input').val();
			date = new Date();
			dateM = formalize(date.getMonth() + 1);
			dateD = formalize(date.getDate());
			dateH = formalize(date.getHours());
			dateMi = formalize(date.getMinutes());
			$('#cShowArea').prepend(
			`<li>
				<img src = ${hSrc} />
                <div>
                	<p class = "say"><a href = "" class = "userName">${uName}</a>: <span class = "sContent">${areaString}</span></p>
                	<p class = "time"><span class = "date">${dateM}月${dateD}日</span> <span class = "time">${dateH}:${dateMi}</span></p>
                </div>
                <span class = "delete">删除</span>
			</li>`)	;
			$('#cShowArea li').hover(
				function() {
					$(this).find('span.delete').show()
				}, function () {
					$(this).find('span.delete').hide()
				}
			);
			$('#cShowArea li span.delete').click(
				function() {
					$(this).parent().fadeOut()
				}
			)
		}
	}
	function cal() {
		areaString = $('#cHeader textarea').val();
        aLength = areaString.length;
		num = 0;
		for(var i = 0; i < aLength; i++) {
			if(areaString.charCodeAt(i) < 128) {
				num++
			} else {
				num = num + 2	
			}
		}
	}
	function keyUp() {
		cal();
		if (num <= 140) {
			$('#bCon b.num').text(oNum - num).removeClass('over');
			$('#bCon span.tip').text('还能输入')
		} else {
			$('#bCon b.num').text(num - oNum).addClass('over');
			$('#bCon span.tip').text('已超出')
		}
	}
    $('#userH li').click(
		function() {
			$(this).addClass('choosed').siblings().removeClass('choosed')		
		}
	);
	$('#cHeader textarea').keyup(keyUp);
	$('#bCon input').click(commit);
	$(document).keydown(function(e) {
        if(e.ctrlKey && e.keyCode === 13) {
			commit()
		}
    });
	$('#cShowArea li').hover(
		function() {
			$(this).find('span.delete').show()
		}, function () {
			$(this).find('span.delete').hide()
		}
	);
	$('#cShowArea li span.delete').click(
		function() {
			$(this).parent().fadeOut()
		}
	)
});