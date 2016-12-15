$(function(){
    demo1();
});

// Swiper滚动插件 demo1
var demo1 = function() {
    var swiper = new Swiper('.demo1 .swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 5.8,
        paginationClickable: true,
        spaceBetween: 10,
        freeMode: true
    });
}