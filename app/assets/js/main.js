$(document).ready(function(){

       var windowHeight= $(window).height();
       var windowScrollPosTop = $(window).scrollTop();
       var windowScrollPosBottom = windowHeight + windowScrollPosTop

$.fn.revealOnScroll=function(direction,speed){
    return (this).each(() => {
       //$(this).hide();
if(!$(this).hasClass('hidden')){
    if(direction=="right"){
        $(this).css({
            "opacity":0,
            "right":"700px"
        })
    }else{
        $(this).css({
            "opacity":0,
            "right":"-700px"
        })
    }
       $(this).addClass('hidden');
    }
       var objectOffset = $(this).offset();
       var objectOffsetTop = objectOffset.top;

if(!$(this).hasClass('animation-complete')){
    if(windowScrollPosBottom > objectOffsetTop){
        $(this).animate({"opacity":1, "right":0}, speed).addClass("animation-complete");
   }
}
        
    });

}//end our function here....




    // $('.example-photo').css("opacity",0)
    
    $(window).scroll(function(){
        windowHeight= $(window).height();
        windowScrollPosTop = $(window).scrollTop();
        windowScrollPosBottom = windowHeight + windowScrollPosTop
       

        $("#features").revealOnScroll("right");
        $('.example-photo').revealOnScroll("left");
$('.girl').revealOnScroll("left",3000);
$('.cat').revealOnScroll("right",800);


/* 
       var objectOffset = $('.example-photo').offset();
       var objectOffsetTop = objectOffset.top;

if(!$('.example-photo').hasClass('animation-complete')){
    if(windowScrollPosBottom > objectOffsetTop){
        $('.example-photo').animate({"opacity":1}, 3000).addClass("animation-complete");
   }
} */
      
       //console.log(objectOffsetTop);

    })
});