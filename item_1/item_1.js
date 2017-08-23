// JavaScript Document
$(document).ready(function(e) {
    $('img').mouseenter(function() {
		$(this).css('opacity', 0.5)	
	}).mouseleave(function() {
		$(this).css('opacity', 1.0)	
	})
});