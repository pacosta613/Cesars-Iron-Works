(function() {

  'use strict';

  angular
    .module('ironWorksApp')
    .controller("HomeController", HomeController);

    function HomeController($scope){

      $scope.name = "Pedro Acosta";

    }


}());