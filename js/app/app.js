(function() {

  'use strict';

  angular
  .module('ironWorksApp', ['ui.router', 'templates'])
  .config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "template/home.html",
        controller: "HomeController as vm"
      })
  
      .state("about", {
        url: "/about",
        templateUrl: "template/about.html",
        controller: "AboutController as vm"
      })
  
      .state("product", {
        url: "/product",
        templateUrl: "template/product.html",
        controller: "ProductController as vm"
      })

      .state("contact", {
        url: "/contact",
        templateUrl: "contact.html",
        controller: "ContactController as vm"
      })

    $urlRouterProvider.otherwise("/");
  });

}());