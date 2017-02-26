$(function(){

'use strict';

angular
  .module("app")
  .controller("SideBarController", SideBarController);

  function SideBarController(){
    $("#sidebar-btn").click(function(e){
      e.stopPropagation();
      $("#sidebar").toggleClass("visible");
      $("#container").toggleClass("body-container");
    });
    $("body").click(function(){
      $("#sidebar").removeClass("visible");
      $("#container").removeClass("body-container");
    });
  }

}());