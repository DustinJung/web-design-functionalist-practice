$(function() {

    function nav() {
        let mainLi = $('nav > ul > li');
        let subUl = $('.sub-nav');

        $(mainLi).each(function() {
            mainLi.mouseenter(function() {
                $(this).children('.sub-nav').stop().slideDown(300);
            });

            mainLi.mouseleave(function() {
                $(this).children('.sub-nav').stop().slideUp(300);
            })
        })
    }

    function slide() {
        let li = $('#slide-div > ul > li');
        let i = 0;
        let current = 0;
        li.eq(0).show();

        setInterval(function() {
            current = i;
            i++;

            if(i > 2) {
                i = 0;
            }

            li.eq(current).fadeOut(450, function() {
                li.eq(i).fadeIn(650);
            })
        }, 2800);
    }

    function tab() {
        let btn = $('#h2-wrapper > h2');
        let tab = $('#take-2-wrapper > div');

        $(btn).each(function(i) {
            $(this).click(function() {
                btn.removeClass('active');
                tab.removeClass('active');
                $(this).addClass('active');
                tab.eq(i).addClass('active'); 
            })
        })
    }

    function popUp() {
        let modal = $('#modal');
        let aTag = $('#notice > ul > li > a').eq(0);
        let btn = $('#modal > button');

        $(aTag).click(function(e) {
            e.preventDefault();
            $(modal).stop().fadeIn(450);
        })
        
        $(btn).click(function() {
            $(modal).stop().fadeOut(450);
        })
    }










    nav();
    slide();
    tab();
    popUp();
})