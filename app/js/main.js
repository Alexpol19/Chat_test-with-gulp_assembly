// Initialize calendar
$(function(){
   $("#container").simpleCalendar({
      // event dates
        events: ['2019-12-06', '2019-12-05', '2019-03-06', '2019-03-07'],
        // event info to show
        eventsInfo: ['Event 1', 'Event 2','Event 3', 'Event 4'],
        selectCallback: function (selDate) { },
        insertCallback: function () { }
      });
});



// Смена button В .Main
// $("#customControlInline").click(function () {
// $("#AddToCart").css({display:'block'}).animate({opacity:'1'}, 500)
// $("#Subscribe").css({display:'none', opacity: 0.7})
// });

// $("#customControlInline2").click(function () {
// $("#Subscribe").css({display:'block'}).animate({opacity:'1'}, 500)
// $("#AddToCart").css({display:'none', opacity: 0.7})

// });

//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
// function autoPlayYouTubeModal(){
//   var trigger = $("body").find('[data-toggle="modal"]');
//   trigger.click(function() {
//     var theModal = $(this).data( "target" ),
//     videoSRC = $(this).attr( "data-theVideo" ),
//     videoSRCauto = videoSRC+"?autoplay=1" ;
//     $(theModal+' iframe').attr('src', videoSRCauto);
//     $(theModal+' button.close').click(function () {
//         $(theModal+' iframe').attr('src', videoSRC);
//     });
//   });
// }
//THE FUNCTION CALL:

// $(document).ready(function(){
//   autoPlayYouTubeModal();
// });






