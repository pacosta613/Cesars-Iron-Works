(function() {

  'use strict';

  angular
  .module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "js/views/home.html",
        controller: "HomeController"
      })
  
      .state("about", {
        url: "/about",
        templateUrl: "js/views/about.html"
      })
  
      .state("product", {
        url: "/product",
        templateUrl: "js/views/product.html"
      })

      .state("contact", {
        url: "/contact",
        templateUrl: "js/views/contact.html"
      });
  });

}());