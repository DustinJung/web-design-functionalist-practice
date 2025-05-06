$(function() {
    function slide() {
        let theLi = $('header > nav > ul > li');
        let theUl = $('header > nav > ul > li > ul');

        theLi.each(function() {
            $(this).mouseenter(function() {
                $(this).children('ul').stop().addClass('active');
            })
        })

        theLi.each(function() {
            $(this).mouseleave(function() {
                $(this).children('ul').stop().removeClass('active');
            })
        })
    }

    function slideShit() {
        let i = 0;
        let moveDistance = 350;
        let theUl = $('#slide > ul');
        let theLi = $('#slide > ul > li');
        let maxNum = theLi.length;

        setInterval(function() {
            i++;
            if (i >= maxNum) {
                i = 0;
            }

            $(theUl).css('transform', `translateY(-${i * moveDistance}px)`);

        }, 2700)
    }

    function modal() {

        let modal = $('#real-modal');
        let atag = $('#notice > ul > li > a').eq(0);
        let btn = $('#real-modal button');

        $(atag).click(function(e) {
            e.preventDefault();
            $(modal).stop().fadeIn(300);
        })

        $(btn).click(function() {
            $(modal).stop().fadeOut(300);
        })
    }









    slide()
    slideShit();
    modal();
})