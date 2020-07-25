$(function(){
    $(window).scroll(function (){
      $(".effect").each(function(){
        var imgPos = $(this).offset().top;    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var doch = $(document).innerHeight(); 
        
        if (((scroll > imgPos - windowHeight + windowHeight/3) && (scroll < imgPos + windowHeight/5))) {
          $("div",this).css("opacity","1" );

        } else {
          $("div",this).css("opacity","0" );
         
        }

        if((doch-windowHeight) < $(window).scrollTop() + 10){
          $("img").css("transform","scale(1,-1)");
        }
        else{
          $("img").css("transform","scale(1,1)");
        }

      });

      $(".line").each(function(){
        var imgPos = $(this).offset().top;    
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var linePos = ((1 - (imgPos -scroll) / windowHeight) * 2 * 100) + 10;

        if (linePos > 100){
          $(".line").css("width", 100+ "%");
        }
        else{
          $(".line").css("width", linePos + "%");
        }
      });

    });
  });

  function window_close(){
    $("#popup,#popup_overlay").fadeOut("slow");
    $("#popup_overlay").remove();
}
  