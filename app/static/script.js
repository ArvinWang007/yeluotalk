//过程化jQuery插件

//$(function(){
//	$("#bb").bigbear();
//});
//(function($){
//	$.fn.bigbear = function(opts){
//		opts = $.extend({}, $.fn.bigbear.defaults, opts);
//		return this.each(function(){
//			var elem = $(this);
//			elem.find("span").text(opts["title"]);
//			$.get(opts["url"], function(data){
//				elem.find("div").text(data["text"]);
//			});
//		});
//	};
//	$.fn.bigbear.defaults = {
//		title: "这是一个简单的测试",
//		url: "data.json"
//	};
//})(jQuery);


//面向对象jQuery插件
$(function(){
	$('#bb').bigbear();
});
(function($){
	$.fn.bigbear = function(opts){
		opts = $.extend({}, $.fn.bigbear.defaults, opts);
		return this.each(function(){
			var elem = $(this);
			var bb = new Bigbear(elem, opts);
			bb.getElem().trigger('data');
		});
	};
	$.fn.bigbear.defaults = {
		title: "这是一个简单的测试",
		url: "data.json"
	};
})(jQuery);

function Bigbear(elem, opts){
	this.elem = elem;
	this.opts = opts;
	this.overlayout = new Overlayout(elem);
	this.init();
}
var bbProt = Bigbear.prototype;

bbProt.getElem = function(){
	return this.elem;
}

bbProt.getOpts = function(){
	return this.opts;
}

bbProt.init = function(){
	var that = this;
	var loadingText = "数据装载中....";
	this.getElem().on('data', function(){
		that._setTitle(that.getOpts()['title']);
		that.overlayout.show();
		that.overlay.hide();
		that.getElem().find("div").text(loadingText);
		$.get(that.getOpts()['url'], function(result){
			that.overlay.hide();
			this.getElem().find('div').text(result["text"]);
		});
	});
}
bbProt._setTitle = function(text){
	this.getElem().find('span').text(text);
}

//遮罩层
function Overlayout(elem){
	this.elem = elem;
};

var olProto = Overlayout.prototype;

olProto.getElem = function(){
	return this.elem;
}
olProto.show = function(){
	$em = this.getElem();
	$em.css("background-color", "grey");
};
olProto.hide = function(){
	$em = this.getElem();
	$em.css("background-color", "none");
}































