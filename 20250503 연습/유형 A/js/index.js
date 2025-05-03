$(function() {
    $('nav > ul > li').mouseenter(function() {
        $(this).children('.sub').stop().slideDown(300);
    });

    $('nav > ul > li').mouseleave(function() {
        $(this).children('.sub').stop().slideUp(300);
    });


    function slide() {
        let i = 0;
        const slideCount = $('.slide li').length;
        const slideWidth = 1200;

        setInterval(function() {
            i++;
            if (i >= slideCount) {
                i = 0;
            }
            $('.slide').css('transform', `translateX(${-i * slideWidth}px)`);
        }, 2500)
    }


    function noticeModal() {
        let theLi = $('.notice > ul > li').eq(0);
        let theModal = $('#modal');
        let closeBtn = $('.modal_btn');
        
        theLi.click(function(e) {
            e.preventDefault();
            theModal.stop().fadeIn(300);
        })

        closeBtn.click(function() {
            theModal.stop().fadeOut(300);
        })
    }







    slide();
    noticeModal();
});