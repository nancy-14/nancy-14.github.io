$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$("[data-toggle=popover]").popover({
  trigger:'focus',
  html: true, 
	content: function() {
          return $('#popover-content').html();
        }
});

$(".language").fadeIn(2500);

$(".corner").toggleClass("corner_rotate");

$('.logo_title').mouseenter(function(){
  $(".corner").toggleClass("corner_rotate");
});


//https://codepen.io/hafizfattah/pen/AbBtc