(function(){

  'use strict';

  angular
    .module('app')
    .controller('SideBarController', SideBarController)


  function SideBarController($scope){

    $scope.state = false;
    $scope.toggleState = toggleState;
    
    function toggleState() {
      $scope.state = true;
    };

  };

}());