(function(){

  'use strict';

  angular
    .module('app')
    .directive('sideBarDirective', sideBarDirective)

  function sideBarDirective(){

    return {
      link: function(scope, element, attr) {
        debugger
        scope.$watch()
      }
    }

  }

}());