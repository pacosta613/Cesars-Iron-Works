(function(){

  'use strict';

  angular
    .module('app')
    .controller('SideBarController', SideBarController)


  function SideBarController($scope, $mdSidenav){

    // $scope.state = false;
    $scope.toggleState = toggleState;
    
    function toggleState(navId) {
      $mdSidenav(navId).toggle();
    };
  };
}());