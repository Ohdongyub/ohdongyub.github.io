$(function(){

    $("#top_pop .xi-close").on("click", function(){
        $("#top_pop").addClass("on");
    });
    
    $(".main_slider").slick({
        arrows:false,
        dots:true,
        autoplay:true,
        autoplaySpeed:4000,
        pauseOnHover:false,
        pauseOnFocus:false,
    });
    
    $(".main_slider figure").eq(1).addClass("on");
    $(".main_slider").on("afterChange", function(e,s,c){
        $(".main_slider figure").eq(c+1).addClass("on").siblings().removeClass("on");
    });
    
    $("#content03 .xi-pause").on("click", function(){
        $(".movie01").trigger("pause");
    });
    $("#content03 .xi-play").on("click", function(){
        $(".movie01").trigger("play");
    });
    
    $("#Movie").YTPlayer({
        showControls:false,
        containment:'#content04',
        autoPlay:true, 
        mute:true, 
        startAt:0, 
        opacity:1,
        playOnlyIfVisible:true
    
    });
    
    
    $("#content05 .container").slick({
        arrows:false,
        dots:true,
        slidesToShow: 5,
        autoplay:true,
        centerMode:true,
    });
    
    var sliTem=$("#content05 figure.slick-current")
    sliTem.addClass("on");
    $("#content05 .container").on("afterChange", function(e,s,c){
        var sliTem=$("#content05 figure.slick-current");
        sliTem.addClass("on").siblings().removeClass("on");
    });
    
    $(".tab_tit li").on("click", function(){
        var idx=$(this).index();
        $(".tab_con>div").eq(idx).addClass("on").siblings().removeClass("on");
        $(this).addClass("on").siblings().removeClass("on");
    });
    
    $(".link select").on("change", function(){
        var lik=$(this).val();
        if(lik) window.open(lik)
    });
    
    
    $("#popup a").on("click", function(){
        $("#popup").hide();
    });
    
    
    
    
    
    
    
    
    });