$(function(){
	demo();
	demo_contHeight();
    demo1();


});

//选项卡
var demo = function() {
    $('ul.demo_btn li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('ul.demo_cont li').eq($(this).index()).show().siblings().hide();
    });	
}

//给demo_cont高
var demo_contHeight = function() {
	var topHead = $(".demo_btn").height() + 50;
	console.log(topHead);
	$(".demo_cont").css("height", $(window).height() - topHead - 200);
}

// Swiper滚动插件 demo1
var demo1 = function() {
    var swiper = new Swiper('.demo1 .swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 2.3,
        paginationClickable: true,
        spaceBetween: 10,
        freeMode: true
    });
}


