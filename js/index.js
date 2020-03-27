$(document).ready(function() {

  $(function () {

      IS_IPAD = navigator.userAgent.match(/iPad/i) != null;
      IS_IPHONE = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);

      if (IS_IPAD || IS_IPHONE) {

          $('a').on('click touchend', function() {
              var link = $(this).attr('href');
              window.open(link,'_blank'); // opens in new window as requested

              return false; // prevent anchor click
          });

          $("#aboutTxt").css({
            "background-color": "#F2F8EE",
            "font-size":"2.5vmin",
            "padding":"0"
          })

          $('#about').on("click touchstart touchmove touchend tap", function (){
              $("#return").removeClass("hidden")
              $("#aboutTxt").removeClass("hidden")
              $("#yogi").removeClass("hidden")
              $("#logolayer").fadeOut("fast");
              $(".social").fadeOut("fast");
              $("#return").fadeIn("fast");
              $("#aboutTxt").fadeIn("fast");
              $("#yogi").fadeIn("fast");
              $('#about').fadeOut("fast");
                return false;
          });
          $('#return').on("click touchstart touchmove touchend tap", function (){
            $("#logolayer").fadeIn("fast");
            $(".social").fadeIn("fast");
            $("#return").fadeOut("fast");
            $("#aboutTxt").fadeOut("fast");
            $("#yogi").fadeOut("fast");
            $('#about').fadeIn("fast");
              return false;
          });
          $('#mailto').on("click touchstart touchmove touchend tap",  function (){
            $("#mailmodal").removeClass("hidden")
            $("#mailmodal").fadeIn("fast")
            return false;
        });
        $('.closemodal').on("click touchstart touchmove touchend tap", function (){
          $(this).parent().parent().fadeOut("fast")
          return false;
      });

      }
  });



$('#logo').tilt();

$('#about').click(function() {
  $("#return").removeClass("hidden")
  $("#aboutTxt").removeClass("hidden")
  $("#yogi").removeClass("hidden")
  $("#logolayer").fadeOut("fast");
  $(".social").fadeOut("fast");
  $("#return").fadeIn("fast");
  $("#aboutTxt").fadeIn("fast");
  $("#yogi").fadeIn("fast");
  $('#about').fadeOut("fast");
});

$('#return').click(function() {
  $("#logolayer").fadeIn("fast");
  $(".social").fadeIn("fast");
  $("#return").fadeOut("fast");
  $("#aboutTxt").fadeOut("fast");
  $("#yogi").fadeOut("fast");
  $('#about').fadeIn("fast");
});

$('#mailto').click(function(){
  $("#mailmodal").removeClass("hidden")
  $("#mailmodal").fadeIn("fast")
})

$('.closemodal').click(function(){
  $(this).parent().parent().fadeOut("fast")
})

});

var infomodal=true;

$(document).bind("mouseleave", function(e) {

if(infomodal === true){
  if (e.pageY - $(window).scrollTop() <= 1) {
    $("#infomodal").removeClass("hidden")
    $("#infomodal").fadeIn("fast")
  }
  infomodal=false;
}

});
