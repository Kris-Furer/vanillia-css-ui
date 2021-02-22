// All Custom JS
// alert('cool man');
// $('body').grow(8000);

// Pseudo Code steps
//1. Set a click event on the mobile menu icon
//2.once clicked demonstrate jquery chaining
//3. Finally demonstrate jquery callback functions

// wait until the document is ready
$('document').ready(function(){
  // Select the mobile menu, add a click event, trigger an alert.

  $("#mobileNav").click(function(){
    // $(".daily-section").hide(3000).show(3000);
    $('.daily-section').hide(3000, function(){
      $('.map-section').hide(3000, function(){
        $('.favourite-section').hide(3000, function(){
          $('.footer-section').hide(3000, function(){

          });

        });

      });
    });
  });

});
