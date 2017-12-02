import $ from 'jquery';

window.$ = $;




// This is an import to my  custom file  "hello.js"
import hello from './hello';

hello();


// -------------------------------------------------------------------------------------
// MOBILE MENU
//--------------------------------------------------------------------------------------
function toggleMenu() {
  $('.js-c-page-nav__menu').toggleClass('active');
  $('.js-c-page-nav__toggle').toggleClass('active'); 
}

$('.js-c-page-nav__toggle').on('click', toggleMenu);
  



// -------------------------------------------------------------------------------------
// NAV MENU SCROLL
//--------------------------------------------------------------------------------------

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.js-c-page-nav').addClass('shrink');
    $('.js-c-page-nav__logo-img').addClass('shrink');
    $('.js-c-page-nav__toggle-img').addClass('shrink');
  } else {
    $('.js-c-page-nav').removeClass('shrink');
    $('.js-c-page-nav__logo-img').removeClass('shrink');
    $('.js-c-page-nav__toggle-img').removeClass('shrink');
  }
});





$(function() {
  
  // contact form animations
  $('.js-c-team-member__popup').click(function() {
    $('.c-team-popup').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $(".c-team-popup");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
  
});