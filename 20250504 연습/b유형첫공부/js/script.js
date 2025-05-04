$(function() {
    function navMenu() {
        let theLis = $('#main-nav > ul > li');

        $(theLis).mouseenter(function() {
            $(this).children('ul').stop().slideDown(300);
        })

        $(theLis).mouseleave(function() {
            $(this).children('ul').stop().slideUp(300)
        })
    }

    function slideFunction() {
        let i = 0;
        let theUl = $('main > div.slide > ul');
        let theLis = $('main > div.slide > ul > li');
        let total = theLis.length;
        $(theLis).eq(i).show();

        setInterval(function() {
            let current = i;
            
            i++
            if(i >= total) {
                i = 0;
            }
            theLis.eq(current).fadeOut(1000, function() {
                theLis.eq(i).fadeIn(1000);
            });
        },3000)
    }

    function popUp() {
        let notice = $('#notice > ul > li').eq(0);
        let modal = $('#modal');
        let btn = $('.exit');

        $(notice).click(function(e) {
            e.preventDefault();
            modal.stop().fadeIn(300);
        })

        $(btn).click(function() {
            modal.stop().fadeOut(300);
        })
    }

    function tab() {
        let btn = $('#h2Wrapper > h2 > button');
        let same = $('.same')

        $(btn).each(function(i) {
            $(this).click(function() {
                btn.removeClass('active');
                same.removeClass('active');
                $(this).addClass('active');
                same.eq(i).addClass('active');
            })
        })
    }


















    navMenu();
    slideFunction();
    popUp();
    tab();
})