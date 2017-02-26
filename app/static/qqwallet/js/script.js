$('.layout').fullpage({
	afterLoad: function(anchorLink, index){
		
	},
	onLeave: function(index, direction){
		
	}
	
});

//提醒用户打开响应式模式
$(function(){
	$('.confirm #conf').click(function(){
		$('.confirm').animate({'opacity':0},1000,function(){
			$(this).hide();
		});
	});
});