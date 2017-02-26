
$(function(){
	
	//page2选项卡效果
	$("#select .head li").on('click', function(){
		$("#select .head li.active").removeClass("active");
		$("#select .body li.active").fadeOut(500, function(){
			$(this).removeClass("active");
		});
		$(this).addClass("active");
		var n = $("#select .head li.active").index();
		console.log(n);
		if(n === 0){
			$("#select .body li:nth-child(1)").fadeIn(500, function(){
				$(this).addClass("active");
			});
		} else if(n === 1){
			$("#select .body li:nth-child(2)").fadeIn(500, function(){
				$(this).addClass("active");
			});
		} else if(n === 2){
			$("#select .body li:nth-child(3)").fadeIn(500, function(){
				$(this).addClass("active");
			});
		}
	});
	
	//page1 'HTML js jq css' 轮换动画效果
	var content = ["HTML","CSS","JavaScripe","jQuery"];
	var currIndex = 0;
	var nextIndex;
	setInterval(function(){
		if(currIndex === 3){
			nextIndex = 0;
		}
		else{
			nextIndex = currIndex + 1;
		}
		$('.page1 h3 span').delay(2000).animate({'fontSize':0, 'opacity':0},1000, function(){
			$(this).text(content[nextIndex]).animate({'fontSize':40,'opacity':1},1000);
		});
		currIndex = nextIndex;
		
	},4000);
});

