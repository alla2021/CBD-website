$(document).ready(function(){
    $('.products__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1, 
        prevArrow: $('.prev-button'),
        nextArrow: $('.next-button'),
        responsive:[
            {
                breakpoint: 1567,
                settings: {
                    slidesToShow: 2,
                }
            },{
                breakpoint: 790,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
    });
  });