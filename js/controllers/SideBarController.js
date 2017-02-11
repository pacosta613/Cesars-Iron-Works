(function(){
  
  'use strict';

  angular
    .module('app')
    .controller("SideBarController", SideBarController);

    function SideBarController($scope){
      $scope.state = false;

      $scope.toggleState = function(){
        $scope.state = true;
        // $scope.state = !$scope.state;
      } 
    };

}());