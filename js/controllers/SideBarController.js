(function(){

  'use strict';

  angular
    .module('app')
    .controller('SideBarController', SideBarController)


  function SideBarController(){

    var vm = this;
    vm.clickFlag = false;
    vm.toggleState = toggleState;

    function toggleState(){
      vm.clickFlag = true;
    };

  };

}());