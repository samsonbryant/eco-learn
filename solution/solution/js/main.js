;(function () {

    'use strict';

    var carousels = function() {
        $(".owl-carousel1").owlCarousel(
            {
                loop:true,
                center: true,
                margin:0,
                responsiveClass:true,
                nav:false,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:1,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:false
                    }
                }
            }
        );

        $(".owl-carousel2").owlCarousel(
            {
                loop:true,
                center: false,
                margin:0,
                responsiveClass:true,
                nav:true,
                responsive:{
                    0:{
                        items:1,
                        nav:false
                    },
                    600:{
                        items:2,
                        nav:false
                    },
                    1000:{
                        items:3,
                        nav:true,
                        loop:true
                    }
                }
            }
        );
    }


    // svg responsive in mobile mode
    var checkPosition = function() {
        if ($(window).width() < 767) {
            $("#bg-services").attr("viewBox", "0 0 1050 800");

        }
    };

    (function($) {
        carousels();
        checkPosition();
    })(jQuery);


}());

// menu toggle button
function myFunction(x) {
    x.classList.toggle("change");
}
function statusChangeCallback(response) {
    if (response.status === 'connected') {
      // User is logged in and authorized
      var accessToken = response.authResponse.accessToken;
      var expiresIn = response.authResponse.expiresIn;
      var signedRequest = response.authResponse.signedRequest;
      var userID = response.authResponse.userID;
  
      // Perform actions with the obtained data
      // Example: Send the data to your server for further processing
  
      // You can also redirect the user to another page or perform other actions
    } else {
      // User is not logged in or has not authorized your app
      // Perform actions accordingly
    }
  }
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }