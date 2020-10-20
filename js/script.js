$(window).on("load", function(){
    $('.loader .inner').fadeOut(500,function(){
        $('.loader').fadeOut(750);
    });
    
})


$(document).ready(function(){
    $('#slides').superslides({
        animation: 'fade',
        pagination: false,
        play: 5000,
    });

    var typed = new Typed(".typed", {
        strings: [ 
            "Web Developer.", 
            "Python Developer.", 
            "Software Engineer."
        ],
        stringsElement: null,
        typeSpeed: 40,
        backSpeed: 60,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    

    var skillsTopOffset = $('.skillsSection').offset().top;

    $(window).scroll(function(){
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: "#fff",
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size:152,
                onStep: function(from,to,percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

        }



    });

    // $('.counter').CountUp(200);

    const nav = $('#navigation');
    navTop = nav.offset().top;

    $(window).on('scroll',stickyNavigation);

    function stickyNavigation(){

        var body = $('body');

        if($(window).scrollTop() >= navTop){
            body.addClass('fixedNav');
            body.css("padding-top", nav.outerHeight() + "px");
        }
        else{
            body.css("padding-top", 0);
            body.removeClass('fixedNav');
        }
    }
    

})