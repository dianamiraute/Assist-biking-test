import $ from 'jquery';
window.$ = $;

// This is an import to my  custom file  "hello.js"
import hello from './hello';
hello();

import Lightbox from './lightbox2';


// -------------------------------------------------------------------------------------
// MOBILE MENU
//--------------------------------------------------------------------------------------
function toggleMenu() {
  $('.js-c-page-nav__toggle').toggleClass('active');
  $('.js-c-page-nav__menu').toggleClass('active');

  $('.js-c-page-nav__toggle').toggleClass('active');

}
$('.js-c-page-nav__toggle').on('click', toggleMenu);


$(".js-c-page-nav__menu a").click(function() {
  $(".js-c-page-nav__menu").removeClass('active');
  $('.js-c-page-nav__toggle').removeClass('active');
});


$(document).mouseup(function(e) {
  if (!$(".js-c-page-nav__menu").is(e.target) &&
    $(".js-c-page-nav__menu").has(e.target).length === 0) {
    $('.js-c-page-nav__menu').removeClass('active');
    $('.js-c-page-nav__toggle').removeClass('active');
    $('.js-c-page-nav__toggle').on('click', toggleMenu);
  }
});


// -------------------------------------------------------------------------------------
// MENU ACTIVE CLASS
//--------------------------------------------------------------------------------------

$(function() {

  $('.js-c-page-nav__menu-link').click(function() {

    $('.js-c-page-nav__menu-item .active').removeClass('active');
    $(this).addClass('active');

  });

});


$('.js-c-page-nav__toggle').on('click', toggleMenu);


// -------------------------------------------------------------------------------------
// NAV MENU SCROLL
//--------------------------------------------------------------------------------------

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.js-c-page-nav').addClass('shrink');
    $('.js-c-page-nav__logo-img').addClass('shrink');
    $('.js-c-page-nav__toggle-img').addClass('shrink');
    $('.js-c-page-nav__menu-link').addClass('shrink');
    $('.js-c-page-nav__container').addClass('shrink');
  } else {
    $('.js-c-page-nav').removeClass('shrink');
    $('.js-c-page-nav__logo-img').removeClass('shrink');
    $('.js-c-page-nav__toggle-img').removeClass('shrink');
    $('.js-c-page-nav__menu-link').removeClass('shrink');
    $('.js-c-page-nav__container').removeClass('shrink');
  }
});


// -------------------------------------------------------------------------------------
// TEAM POUPUP CONTAINER
//--------------------------------------------------------------------------------------

$(function() {
  $('.js-c-team-member__popup').click(function() {
    $('.js-c-team-popup').fadeToggle();
  })
  $(document).mouseup(function(e) {
    var container = $(".js-c-team-popup");

    if (!container.is(e.target) // if the target of the click isn't the container...
      &&
      container.has(e.target).length === 0) // ... nor a descendant of the container
    {
      container.fadeOut();
    }
  });

});


// -------------------------------------------------------------------------------------
// FORM JOIN US CONTAINER
//--------------------------------------------------------------------------------------
$(function() {
  $('.js-c-page-footer__button-join-us-link').click(function() {
    $('.js-c-form-join-us').fadeToggle();
  })
  $(document).mouseup(function(e) {
    var container = $(".js-c-form-join-us");

    if (!container.is(e.target) // if the target of the click isn't the container...
      &&
      container.has(e.target).length === 0) // ... nor a descendant of the container
    {
      container.fadeOut();
    }
  });

});
 

 
  // -------------------------------------------------------------------------------------
  // SCROLL TOP
  //--------------------------------------------------------------------------------------

  function scrollTop() {
    $('html,body').animate({
        scrollTop: 0
      },
      1500);
  }

  $('.js-scroll-top').on('click', scrollTop);


  // -------------------------------------------------------------------------------------
  // COMPETITION CAROUSEL
  //--------------------------------------------------------------------------------------


  let step = 160;


  function competitionGoUp() {
    $('.js-competition-scroll-area').animate({
        scrollTop: $('.js-competition-scroll-area').scrollTop() - step
      },
      500);
  }

  function competitionGoDown() {
    $('.js-competition-scroll-area').animate({
        scrollTop: $('.js-competition-scroll-area').scrollTop() + step
      },
      500);
  }

  function initCompetitionCarousel() {
    $('.js-competition-up').on('click', competitionGoUp);
    $('.js-competition-down').on('click', competitionGoDown);
  }

  initCompetitionCarousel();


  // -------------------------------------------------------------------------------------
  // TEAM SLIDER
  //--------------------------------------------------------------------------------------
  $(document).ready(function() {

    //cache our items and containers
    var items = $(".js-c-team-member");
    var scrollContainer = $(".js-c-team__slider");


    /**
     * Fetches the next or previous item from items
     *
     * @param conntainer {JQueryElement} scroll-container in which the items can be found
     * @param items {Array} items to be searched through
     * @param isNext {boolean} set to true (default) if you want the next item, to false if you want the previous one
     * @returns {*}
     */
    function fetchItem(container, items, isNext) {
      var i,
        scrollLeft = container.scrollLeft();

      //set isNext default to true if not set
      if (isNext === undefined) {
        isNext = true;
      }

      if (isNext && container[0].scrollWidth - container.scrollLeft() <= container.outerWidth()) {
        //we reached the last one so return the first one for looping:
        return $(items[0]);
      }

      //loop through items
      for (i = 0; i < items.length; i++) {

        if (isNext && $(items[i]).position().left > 0) {
          //this item is our next item as it's the first one with non-negative "left" position
          return $(items[i]);

        } else if (!isNext && $(items[i]).position().left >= 0) {
          //this is our previous item as it's the one with the smallest negative "left" position
          //if we're at item 0 just return the last item instead for looping
          return i == 0 ? $(items[items.length - 1]) : $(items[i - 1]);
        }
      }

      //nothing found
      return null;
    }

    /**
     * Moves the scrollcontainer to the next/previous item (depending on event.data.direction).
     *
     * @param event
     */
    function moveToItem(event) {
      //fetch the next/previous item:
      var isNext = event.data.direction == "next";
      var item = isNext ? fetchItem(scrollContainer, items, true) : fetchItem(scrollContainer, items, false);

      if (item) {
        //scroll to item
        scrollContainer.animate({ "scrollLeft": item.position().left + scrollContainer.scrollLeft() }, 400);
      }
    }

    //bind events
    $(".js-c-team__arrow--left").click({ direction: "prev" }, moveToItem);
    $(".js-c-team__arrow--right").click({ direction: "next" }, moveToItem);


  });

 
