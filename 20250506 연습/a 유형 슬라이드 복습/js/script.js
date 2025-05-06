$(function() {
    function slide() {
        let ul = $('#slide > ul');
        let theLis = $('#slide > ul > li')
        let i = 0;
        let moveDistance = 1200;
        let  maximumIndex = theLis.length;

        setInterval(function() {
            i++;
            if(i >= maximumIndex) {
                i = 0
            };
            ul.css('transform', `translateX(-${i * moveDistance}px)`);
        }, 2500)
    }










    slide();
})