//ios
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
   //alert(navigator.userAgent); 
   
   //add a new meta node of viewport in head node
	head = document.getElementsByTagName('head');
	viewport = document.createElement('meta');
	viewport.name = 'viewport';
	viewport.content = 'target-densitydpi=device-dpi, width=' + 640 + 'px, user-scalable=no';
	head.length > 0 && head[head.length - 1].appendChild(viewport);    
   
}
//android
//if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
//  //alert(navigator.userAgent);  
//  window.location.href ="iPhone.html";
//} else if (/(Android)/i.test(navigator.userAgent)) {
//  //alert(navigator.userAgent); 
//  window.location.href ="Android.html";
//} else {
//  window.location.href ="pc.html";
//};

$(function(){
	
	
	//页面不足一屏，铺满一屏
	$('.layout').css('min-height',$(window).height());
	
	var orignLeft = $('.taber .head li.selected').offset().left;
	$('.taber .head em').css('left', orignLeft-30);
	
	//选项卡效果1
	$('.taber .head li').hover(function(){
		$('.taber .head li').removeClass('selected');
		$(this).addClass('selected');
		
		//蓝色线条动画
		var x=$(this).offset().left;
		console.log(x);
		$('.taber .head em').animate({'left':x-30}, 'normal', 'easeInOutBack');
		
		//body
		var n = $(this).index();
		$('.taber .body').hide().eq(n).show();
	})
})

