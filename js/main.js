// Navbar toggle display
$('#menu-button').click(function(){
    $('.navbar-nav').toggle();
});

// Smooth page scroll from nav items
$(function() {
    $('ul.nav a').on('click',function(event){
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);

        event.preventDefault();
    });
});

// Slideshow functions
function slideSwitch() {
    var $active = $('#slideshow img.active'); // Sets active variable based on class

    if ( $active.length == 0 ) $active = $('#slideshow img:last'); // Sets default image to active

    var $next =  $active.next().length ? $active.next() // If active.next DOM element is present, sets variable to next
        : $('#slideshow img:first');                    // If not, next loops back to top of list in DOM

    $active.addClass('last-active');        // Add class to active bump it down on z-index by one level

    $next.css({opacity: 0.0})              // Set opacity of next image to zero
        .addClass('active')                // Add class to bump up to visible level
        .animate({opacity: 1.0}, 1000, function() {    // Animate opacity to 100
            $active.removeClass('active last-active'); // Remove classes from previously active image
        });
}

$(function() {
    setInterval( "slideSwitch()", 5000 );  // Call function at 5-second intervals
});

// Isotope grid resizing
var $grid = $('.grid').isotope({
  // options
  itemSelector: '.work-img',
  layoutMode: 'fitRows'
});
    //function for filtering
$('.project-nav').on('click', 'button', function(){
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});
