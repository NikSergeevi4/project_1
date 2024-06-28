$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: false
            }
        }
        ]     
    });
});