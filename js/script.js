$(function () {
   $('.hamb').click(function () {
      $('.mobile').animate({
         right: 0
      });
      $('.overlay').fadeIn();
   });
   $('.mobile span, .overlay').click(function () {
      $('.mobile').animate({
         right: -250
      });
      $('.hamb').show();
      $('.overlay').fadeOut();
   });
});


