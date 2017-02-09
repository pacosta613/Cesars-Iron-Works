(function() {

  'use strict';

  angular
  .module('ironWorksApp', ['ui.router'])
  .config(function($stateProvider) {
    
    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "js/views/home.html",
        controller: "HomeController"
      })
  
      .state("about", {
        url: "/about",
        templateUrl: "js/views/about.html",
        controller: "AboutController"
      })
  
      .state("product", {
        url: "/product",
        templateUrl: "js/views/product.html",
        controller: "ProductController"
      })

      .state("contact", {
        url: "/contact",
        templateUrl: "js/views/contact.html",
        controller: "ContactController"
      });

  });

}());