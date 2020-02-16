
var postion = $('.c-slide-up');
var windowHeight = $(window).height();


postion.each(function() {
    return console.log($(this).offset().top)
})

$(window).on('scroll resize', function() {
    var viewTopOfWindow = $(window).scrollTop();
    var slideUpElement = viewTopOfWindow + windowHeight
    postion.each(function() {
    // console.log($(this).offset().top)
    if($(this).offset().top < slideUpElement) {
        console.log('test');
        $(this).addClass('c-slide-up-animation');
    }
})
});

console.log(windowHeight);
// console.log(viewTopOfWindow);