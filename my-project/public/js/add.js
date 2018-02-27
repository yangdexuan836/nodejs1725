$(function(){
	$(".add_com1>li").click(function(){		
		index=$(this).index();
		$(this).css("background","#fff").siblings().css("background","#efefef")
		$(".add_com2 li").eq(index).css("display","block").siblings().css("display","none");
	})


})