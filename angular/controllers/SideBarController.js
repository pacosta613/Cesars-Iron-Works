$(document).ready(function(){
  $("#sidebar-btn").click(function(e){
    e.stopPropagation();
    $("#sidebar").toggleClass("visible");
    $("#container").toggleClass("body-container");
  });
  $("body").click(function(){
    $("#sidebar").removeClass("visible");
    $("#container").removeClass("body-container");
  });


  // if ($("#sidebar") === $("#sidebar.visible")) {
  //   $(".container").toggleClass("body-container");
  // } else {
  //   $(".container").removeClass("body-container");
  // }

});