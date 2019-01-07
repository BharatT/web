$(document).ready(function(){

       var windowHeight= $(window).height();
       var windowScrollPosTop = $(window).scrollTop();
       var windowScrollPosBottom = windowHeight + windowScrollPosTop

$.fn.revealOnScroll=function(){
    return (this).each(() => {
       //$(this).hide();
if(!$(this).hasClass('hidden')){
       $(this).css("opacity",0).addClass('hidden');
    }
       var objectOffset = $(this).offset();
       var objectOffsetTop = objectOffset.top;

if(!$(this).hasClass('animation-complete')){
    if(windowScrollPosBottom > objectOffsetTop){
        $(this).animate({"opacity":1}, 3000).addClass("animation-complete");
   }
}
        
    });

}//end our function here....


$("#features").revealOnScroll();

$('.example-photo').revealOnScroll();


    // $('.example-photo').css("opacity",0)
    
    $(window).scroll(function(){
        windowHeight= $(window).height();
        windowScrollPosTop = $(window).scrollTop();
        windowScrollPosBottom = windowHeight + windowScrollPosTop
       
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