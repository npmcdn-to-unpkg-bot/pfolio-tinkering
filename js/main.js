function slideSwitch(){
    var $active = $(#slideshow img.active);
    var $next = $active.next();

    $next.addClass('active');
    $active.removeClass('active');

}

$(function(){
    setInterval('slideSwitch()', 5000);
});
