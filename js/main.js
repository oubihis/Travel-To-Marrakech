// Cover slider auto height
$(function(){
    $('.hero-body').css({
        height: $(window).innerHeight()
    });
    $(window).resize(function(){ // add resize() to adjust to browser
        $('.hero-body').css({
            height: $(window).innerHeight()
        });
    });
})

// Date Picker 

  $( function() {
    $( "#datepicker" ).datepicker();
  } );