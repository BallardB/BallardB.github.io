

  $(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').animate({
          'scrollTop': $target.offset().top - 100
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });


function getLiveTime() {
    var today = new Date();
    var h = today.getHours();
    if ((h > 12) && (h < 25)) {
      h = h - 12; // not in military time
    }
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById("lil-clock-hours").innerHTML = h;
    document.getElementById("lil-clock-min").innerHTML = m;
    


    var t = setTimeout(getLiveTime, 500);
}



function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

getLiveTime();





});
  $(window).on('load', function() {
    $('body').addClass('loaded');
});
    function rotateCard(btn){
        var $card = $(btn).closest('.card-container');
        console.log($card);
        if($card.hasClass('hover')){
            $card.removeClass('hover');
        } else {
            $card.addClass('hover');
        }
    };
    

var $element = $('.animation_element');
console.log("animation_elements:" , $element);
var $window = $(window);

function check_if_in_view() {
  // console.log("checking in view");
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  console.log("window_top_position: " + window_top_position);
  var window_bottom_position = (window_top_position + window_height);
  console.log("window bottom position" + window_bottom_position);

  // console.log("element: " , $element);
  // var element_height = $element.outerHeight();
  // console.log("element_height: " + element_height);
  // var element_top_position = $element.offset().top;
  //   console.log("element_top_position: " , element_top_position);
  //   var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    // if ((element_bottom_position >= window_top_position) &&
    //   (element_top_position <= window_bottom_position)) {


//    About Me Scroll Section
      if ((window_top_position >= 482) && (window_top_position <=1435)){
      $('.biopic').addClass('in-view');
      $('.aboutMe-li').addClass('in-view');
    } else {
      $('.biopic').removeClass('in-view');
      $('.aboutMe-li').removeClass('in-view');
    }

//    Portfolio Scroll Section
      if ((window_top_position >= 1301) && (window_top_position <=1515)){
      $('.portfolio-li').addClass('in-view');
    } else {
      $('.portfolio-li').removeClass('in-view');
    }

//    Contact Info Scroll Section
      if ((window_top_position >= 1515) && (window_top_position <= 1710)){
      $('.contactInfo-li').addClass('in-view');
    } else {
      $('.contactInfo-li').removeClass('in-view');
    }
  
}
$window.on('scroll resize', check_if_in_view);

$window.trigger('scroll');

/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 700,
      "density": {
        "enable": true,
        "value_area": 5000
      }
    },
    "color": {
      "value": ["#c32b3a","4D9DE0","#E1BC29","#3BB273","#7768AE"]
      // "value": ["#c32b3a","4D9DE0","#E1BC29","#3BB273","#7768AE"]
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 2
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": .9,
      "random": false,
      "anim": {
        "enable": false,
        "speed": .1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1600,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#0000",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 65,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
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
