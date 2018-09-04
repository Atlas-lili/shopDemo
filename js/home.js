//top导航
$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>50&&$("body>.toTop").css("display")=="none"){
			$("body>.toTop").css("display","block");
		}else if($(window).scrollTop()<50&&$("body>.toTop").css("display")=="block"){
			$("body>.toTop").css("display","none");
		}
	})
});
