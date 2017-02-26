$(function(){		
	/*触屏*/
		$(".slider .inner").bind("swipeleft",function(){
 			
		});
		
		$(".slider .inner").bind("swiperight",function(){
 			
		});
		//手写jq
		$('#ppxx .pre').click(function(){
			$('#ppxx ul').animate({'margin-left':'-233px'}, function(){
				$('#ppxx li:first-child').appendTo('#ppxx ul');
				$('#ppxx ul').css('margin-left', '0');
			});
		});
		$('#ppxx .next').click(function(){
			$('#ppxx li:last-child').prependTo('#ppxx ul');
			$('#ppxx ul').css('margin-left', '-=233px');
			$('#ppxx ul').animate({'margin-left':'+=233px'})
		});
})