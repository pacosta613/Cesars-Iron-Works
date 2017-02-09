(function() {

  'use strict';

  angular
  .module('ironWorksApp', ['ngRoute'])
  .config(function($routeProvider) {
    
    $routeProvider
      .when("/home", {
        templateUrl: "js/views/home.html",
        controller: "HomeController"
      })
  
      .when("/about", {
        templateUrl: "js/views/about.html",
        controller: "AboutController"
      })
  
      .when("/product", {
        templateUrl: "js/views/product.html",
        controller: "ProductController"
      })

      .when("/contact", {
        templateUrl: "js/views/contact.html",
        controller: "ContactController"
      });

  });

}());