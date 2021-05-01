import anime from 'animejs/lib/anime.es.js';

$(document).ready(function () {

  // Set the date we're counting down to
  var countDownDate = new Date("jun 26, 2021 15:30:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24)) + "&nbsp;:&nbsp;";
    if (days < 10) {
      days = "0" + days;
    }
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + "&nbsp;:&nbsp;";
    if (hours < 10) {
      hours = "0" + hours;
    }
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) + "&nbsp;:&nbsp;";
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML =
    "<span class='timer'>" +
      "<span>" +
      days +
      "<div>giorni</div>" +
      "</span>" +
      "<span>" +
      hours +
      "<div>ore</div>" +
      "</span>" +
      "<span>" +
      minutes +
      "<div>minuti</div>" +
      "</span>" +
      "<span class='secondi'>" +
      seconds +
      "<div>secondi</div>" +
      "</span>" +
    "</span>";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "<span class='auguri-sposi'>Auguri agli Sposi!</span>";
    }
  }, 1000);


  // * * * MODAL MOBILE MENU
  $(".icon-menu").click(function () {
        $('.nav-menu-wrapper, #hero, main, footer').hide();
        $(".modal-menu-wrap").addClass("active");
    });

  $(".modal-menu-close").click(function () {
        $('.nav-menu-wrapper, #hero, main, footer').show();
        $(".modal-menu-wrap").removeClass("active");
    });

    $('.modal-menu-wrap .chi-siamo-modal').click(function () {
      $('.nav-menu-wrapper, #hero, main, footer').show();
      $(".modal-menu-wrap").removeClass("active");
    });

    $('.modal-menu-wrap .location-modal').click(function () {
      $('.nav-menu-wrapper, #hero, main, footer').show();
      $(".modal-menu-wrap").removeClass("active");
    });

    $('.modal-menu-wrap .conferma-modal').click(function () {
      $('.nav-menu-wrapper, #hero, main, footer').show();
      $(".modal-menu-wrap").removeClass("active");
    });

    $('.modal-menu-wrap .regalo-modal').click(function () {
      $('.nav-menu-wrapper, #hero, main, footer').show();
      $(".modal-menu-wrap").removeClass("active");
    });

});
















// END
