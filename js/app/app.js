angular
  .module('ironWorksApp', [])
  .config(function($routeProvider, $urlRouterProvider) {
    
    $routeProvider
      .when("/", {
        templateUrl: "template/home.html",
        controller: "HomeController as vm"
      })
  
      .when("/about", {
        templateUrl: "template/about.html",
        controller: "AboutController as vm"
      })
  
      .when("/product", {
        templateUrl: "template/product.html",
        controller: "ProductController as vm"
      })

      .when("/contact", {
        templateUrl: "contact.html",
        controller: "ContactController as vm"
      })
    //$urlRouterProvider.otherwise("/home");
  })