$(function() {
    function subNav() {
        let mainNav = $('#nav > ul > li')
        let subNav = $('.subNav')
        $(mainNav).mouseenter(function() {
            $(this).children('.subNav').stop().slideDown(300);
        });

        $(mainNav).mouseleave(function() {
            $(this).children('.subNav').stop().slideUp(300);
        })
    }

    function mainSlide() {
        function autoSlide() {
            let theDiv = $('#main1')
            let theUl = $('#slideUl');
            let i = 0;
            let theLis = $('#main1 > ul > li')
            let slideIndex = theLis.length;
            let eachSlide = 1200;

            setInterval(function() {
                i++;
                if ( i >= slideIndex) {
                    i = 0;
                }
                theUl.css('transform', `translateX(-${i * eachSlide}px)`)
            }, 2500)
        }
        autoSlide();
    }

    function popUp() {
        let firstLi = $('.firstArticle > ul > li').eq(0);
        let $modal = $('#modal');
        $(firstLi).click(function(e) {
            e.preventDefault();
            $modal.stop().fadeIn(300);
        })

        $('.theBtn').click(function() {
            $modal.stop().fadeOut(300);
        })
    }















    subNav();
    mainSlide();
    popUp();
})