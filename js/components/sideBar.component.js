(function(){
  
  'use strict';

  var sideBar = {
    transclude: true,
    templateUrl: "js/views/sidebar/sidebar.html",
    controller: sideBarController
  }

  function sideBarController(){

    $("#sidebar-btn").click(function(){
      $("#sidebar").toggleClass("visible");
    });

  };

  angular
    .module('app')
    .component('sideBar', sideBar);

}());