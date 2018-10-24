
$(document).ready(function(){
    
    // show main menu
    $('.burger').on('click', function(){
       $('.burger').toggleClass('close'); 
       $('.wrap-hea').toggleClass('open');
    });
    
    
    
    // remove cookie
    $('.decline').on("click", function(){
        $('.cookie').css({"opacity":"0"});
    });
    
    
   
    // scroll menu right
    $('.scroll-to-div').on('click', function(event){
        event.preventDefault();
        targetId = $(this).attr('data-target-id');
        
        if($(targetId).length >0){
            $('html, body').animate({
                scrollTop: $(targetId).offset().top ,
            },500);
        }
    });
    
    
    
    // animtion background frist load page 
    $('#bg1').css({
        "background-image": "url(/static/images/background_2.jpg)",
        "opacity":"1",
        "transform":"translate3d(0,-30px,0)"
    }); 
    setTimeout(function() {
        $('#bg2').css({
            "background-image": "url(/static/images/background_4.jpg)",
            "opacity":"1",
            "transform":"translate3d(0,-30px,0)"
        });
        $('.scene-home h1').addClass('active');
    }, 2000);
    setTimeout(function() {
        $('.menufix').addClass('is-show');
        $('.scene-home').addClass('is-show');
    }, 3000);
    
    
    
    


});



// scroll home
function isScrolledInView(e){
    
    var viewTop = $(window).scrollTop() - 250;
    var viewBottom = viewTop + $(window).height();
    var elemTop = $(e).offset().top;
    var elemBottom = elemTop + $(e).height();
    return ((elemBottom <= viewBottom) && (elemTop >= viewTop));
    
}



$(window).on('scroll', function(){
    
    if(isScrolledInView('.about-1')){
        $('.about-1').addClass('in-view');
        $('.bg').addClass('darken');
    }else{
        $('.about-1').removeClass('in-view');
        $('.bg').removeClass('darken');
        
    }
    if(isScrolledInView('.about-2')){
        $('.about-2').addClass('in-view');
        $('.bg').addClass('darken');
    }else{
        $('.about-2').removeClass('in-view');
    }
    if(isScrolledInView('.about-3')){
        $('.about-3').addClass('in-view');
        $('.bg').addClass('darken');
    }else{
        $('.about-3').removeClass('in-view');
        
    }
    if(isScrolledInView('.futuer-1')){
        $('.futuer-1').addClass('in-view');
    }else{
        $('.futuer-1').removeClass('in-view');
        
    }
    if(isScrolledInView('.futuer-2')){
        $('.futuer-2').addClass('in-view');
    }else{
        $('.futuer-2').removeClass('in-view');
    }
    if(isScrolledInView('.futuer-3')){
        $('.futuer-3').addClass('in-view');
       $('.bg-fix').css({"position": "fixed"});
    }else{
        $('.futuer-3').removeClass('in-view');
        
    }
    
    
});


        // scroll about - past-gift
        // 
    function isScrolledInViewPast(e){
        var scrollTop = $(window).scrollTop();
        var objectTop = $(e).offset().top + 100;
        var elem = scrollTop + $(window).height();
        return (elem > objectTop);

    }

   $(window).scroll(function() { 
       
        var scroll = $(window).scrollTop();
        var objectSelect = $("#past-gifts");
        var objectPosition = objectSelect.offset().top -120;
        var objectPositionTop = objectSelect.offset().top -105;
       

        
        if (scroll > objectPosition) {
            $('.bg').addClass('light');
        }else{
            $('.bg').removeClass('light');
        }
        if(scroll > objectPositionTop){
            $('.bg').removeClass('light');
            $("#past-0").addClass("is-show");
            $('.timeline').addClass("is-show");
            $('#bg3').css({
                "background-image": "url(/static/images/background_3.jpg)",
                "opacity":"1",
                "transform":"translate3d(0,-100px,0)"
            });
            $('.scene-home').removeClass('is-show');
        }else{
            $("#past-0").removeClass("is-show");
            $('.timeline').removeClass("is-show");
            $('#bg3').css({
                "opacity":"0",
                "transform":"translate3d(0,0,0)"
            });
            $('.scene-home').addClass('is-show');
        }
        
        if (isScrolledInViewPast('#past-1')) {

        $({ countNum: $('.fun-level').html() }).animate({ countNum: 1941 }, {
        
            start:4,
            duration: 2000,
            easing: 'linear',
            step: function () {
            $('.fun-level').html(Math.floor(this.countNum));
            },
            complete: function () {
            $('.fun-level').html(this.countNum);
            }
        });
            
            $("#past-1").addClass("is-show");
            $('#bg4').css({
                "background-image": "url(/static/images/background_1.jpg)",
                "opacity":"1",
                "transform":"translate3d(0,-100px,0)"
            });
        } else{
            $({ countNum: $('.fun-level').html() }).animate({ countNum: 1655 }, {
        
                start:4,
                duration: 2000,
                easing: 'linear',
                step: function () {
                $('.fun-level').html(Math.floor(this.countNum));
                },
                complete: function () {
                $('.fun-level').html(this.countNum);
                }
            });
            $("#past-1").removeClass("is-show");
            $('#bg4').css({
                "opacity":"0",
                 "transform":"translate3d(0,0,0)"
            });
        }
        if (isScrolledInViewPast('#past-2')) {
            $({ countNum: $('.fun-level').html() }).animate({ countNum: 1976 }, {
        
                start:4,
                duration: 2000,
                easing: 'linear',
                step: function () {
                $('.fun-level').html(Math.floor(this.countNum));
                },
                complete: function () {
                $('.fun-level').html(this.countNum);
                }
            });
            $("#past-2").addClass("is-show");
            $('#bg5').css({
                "background-image": "url(/static/images/background-5.jpg)",
                "opacity":"1",
                "transform":"translate3d(0,-100px,0)"
            });
        } else{
            $("#past-2").removeClass("is-show");
            $('#bg5').css({
                "opacity":"0",
                "transform":"translate3d(0,0,0)"
            });
        }
        
        
        
    
        
         
});  


    // scroll future
 $(window).scroll(function() { 
    offsetTop = 600;
    var scroll = $(window).scrollTop();
    var object1 = $("#future");
    var object2 = object1.offset().top;
    var object3 = object1.offset().top - offsetTop;
    
    if (scroll >= object3){
        $('.menufix .right-menu li a').css({"color":"black"});
    }else{
        $('.menufix .right-menu li a').css({"color":"white"});
    }
    if (scroll >= object2){
        $('.wrap-future').addClass('is-show');
        $('.timeline').removeClass('is-show');
        
    }else{
        $('.wrap-future').removeClass('is-show');
    }
    
    
    
 });
 
 
 function isScrolledInViewFuture(e){
    
    var future1 = $(window).scrollTop() - 150;
    var future = future1 + $(window).height();
    var future2 = $(e).offset().top - ($(window).height()/2);
    var future3 = future2 + $(e).height();
    return ((future3 <= future) && (future2 >= future1));
    
}
  $(window).scroll(function() { 
    
      if (isScrolledInViewFuture('.futuer-4')){
            $(".futuer-4").css({"opacity":"1"});
            $('#bg6').css({
                "background-image": "url(/static/images/background_3.jpg)",
                "opacity":"1",
                "transform":"translate3d(0,-100px,0)"
            });
            setTimeout(function() {
                $(".futuer-4").addClass("is-show");
            },1000);
        }
  });