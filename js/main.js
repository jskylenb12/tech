$(document).ready(function(){
    //슬라이더
    $(".mainSlider").slick({
        dots:true,
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:false,
    });
    
    //wow
    new WOW().init();
    
    //
    $(".open").click(function(){
        $(".sideNav").css("width","250px");
    })
})