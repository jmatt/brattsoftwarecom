/* Author: 
     J. Matt Peterson and Chris Brue
*/

var brcolor = $("#br").css("color");
$("#br").mouseout(function() {
  $("#br")
    .text("Br")
    .animate({
      color: $.Color({ alpha: .3, hue: 144 })
  }, 320 )
}).mouseover(function() {
  $("#br")
    .text("JM").delay(400)
    .animate({
      color: $.Color({ alpha: .6, hue: 120 })
  }, 240)
  $("#jmatt").animate({
    color: $.Color({ alpha: .64})})
});

$("#att").mouseout(function() {
  $("#att")
  .text("att")
  .animate({
    color: $.Color({ alpha: .54, hue: 120 })  
  }, 320)
}).mouseover(function() {
  $("#att")
  .text("ue")
  .animate({
    color: $.Color({ alpha: .3, hue: 160 })
  }, 240)
  $("#chris").animate({
    color: $.Color({ alpha: .64})})
});
  
$("#bratt").mouseout(function() {
  $("#bratt").addClass("tacos")
  $("#software")
    .animate({
      color: $.Color("#0078BD").transition("transparent", 0.64)
    }, 800)
});
















