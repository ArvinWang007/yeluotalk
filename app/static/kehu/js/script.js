$(function(){
	//侧边栏子菜单动画效果
	$('.aside li').hover(function(){
		$(this).addClass('seleted');
	},
	function(){
		$(this).removeClass('seleted');
	});
	
	//给news加滚动效果
	var aFun = function(){
		$('.newsList ul').animate({"margin-top":"-35px"},function(){
			$('.newsList li:first-child').appendTo('.newsList ul');
			$('.newsList ul').css("margin-top","0");
		});
	}
	var gunDong = setInterval(aFun, 3000);
	$('.newsList ul').hover(function(){
		clearInterval(gunDong);
	},
	function(){
		gunDong = setInterval(aFun, 3000);
	});
	
	//给info加动画
	$('.info li').hover(function(){
		$(this).stop().animate({"width":"529"})
	},
	function(){
		$(this).stop().animate({"width":"140"})
	})
	
})