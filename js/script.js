const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// gallery


// smooth scroll when click on link

$(function () {
  $("#menu li a").click(function (e) {
    "use strict";
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top + 1,
      },
      1000
    );
  });

  // Add Active Class on Navbar Link and Remove from the Siblings(if any exist!)

  $("#menu li a").click(function () {
    // $(".navbar a").removeClass("active");
    // $(this).addClass("active");

    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .find("a")
      .removeClass("active");
  });

  // Sync Navbar Links With Sections

  $(window).scroll(function () {
    $(".block").each(function () {
      if ($(window).scrollTop() >= $(this).offset().top) {
        var blockId = $(this).attr("id");
        $("#menu a").removeClass("active");
        $('#menu li a[data-scroll="' + blockId + '"]').addClass("active");
      }
    });
  });
});


// show and hide bottom nav based on user scroll
let fixedBottomNav = $(".fixed-bottom-nav");
$(window).scroll(function() {
  if($(window).scrollTop() > 2000) {
    fixedBottomNav.removeClass("hidden")
  } else {
    fixedBottomNav.addClass("hidden")
  }
});
