

  $(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});
  $(window).on('load', function() {
    $('body').addClass('loaded');
});
    

// $(window).on('scroll',function(){

//     // we round here to reduce a little workload
//     stop = Math.round($(window).scrollTop());
//     if (stop > 1400) {
        
//         $('.footer-content').addClass('past-main');
//     } else {
//         $('.footer-content').removeClass('past-main');
        
//    }

//    var scrollTop = $(window).scrollTop();
// console.log(scrollTop);

// });
