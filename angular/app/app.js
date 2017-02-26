(function() {

  'use strict';

  angular
  .module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "angular/views/navbar/home.html",
        controller: "HomeController"
      })
  
      .state("about", {
        url: "/about",
        templateUrl: "angular/views/navbar/about.html"
      })
  
      .state("product", {
        url: "/product",
        templateUrl: "angular/views/navbar/product.html"
      })

      .state("contact", {
        url: "/contact",
        templateUrl: "angular/views/navbar/contact.html"
      })

      .state("railing", {
        url: "/railing",
        templateUrl: "angular/views/sidebar/railing.html"
      })

      .state("window", {
        url: "/window",
        templateUrl: "angular/views/sidebar/window.html"
      })

      .state("stair", {
        url: "/stair",
        templateUrl: "angular/views/sidebar/stair.html"
      })

      .state("fence", {
        url: "/fence",
        templateUrl: "angular/views/sidebar/fence.html"
      })

      .state("cellar", {
        url: "/cellar",
        templateUrl: "angular/views/sidebar/cellar.html"
      })

      .state("balconies", {
        url: "/balconies",
        templateUrl: "angular/views/sidebar/balconies.html"
      })

      .state("fire", {
        url: "/fire",
        templateUrl: "angular/views/sidebar/fire.html"
      })

      .state("porch", {
        url: "/porch",
        templateUrl: "angular/views/sidebar/porch.html"
      });
  });

}());