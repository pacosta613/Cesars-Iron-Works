(function() {

  'use strict';

  angular
  .module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "js/views/navbar/home.html",
        controller: "HomeController"
      })
  
      .state("about", {
        url: "/about",
        templateUrl: "js/views/navbar/about.html"
      })
  
      .state("product", {
        url: "/product",
        templateUrl: "js/views/navbar/product.html"
      })

      .state("contact", {
        url: "/contact",
        templateUrl: "js/views/navbar/contact.html"
      })

      .state("railing", {
        url: "/railing",
        templateUrl: "js/views/sidebar/railing.html"
      })

      .state("window", {
        url: "/window",
        templateUrl: "js/views/sidebar/window.html"
      })

      .state("stair", {
        url: "/stair",
        templateUrl: "js/views/sidebar/stair.html"
      })

      .state("fence", {
        url: "/fence",
        templateUrl: "js/views/sidebar/fence.html"
      })

      .state("cellar", {
        url: "/cellar",
        templateUrl: "js/views/sidebar/cellar.html"
      })

      .state("balconies", {
        url: "/balconies",
        templateUrl: "js/views/sidebar/balconies.html"
      })

      .state("fire", {
        url: "/fire",
        templateUrl: "js/views/sidebar/fire.html"
      })

      .state("porch", {
        url: "/porch",
        templateUrl: "js/views/sidebar/porch.html"
      });
  });

}());