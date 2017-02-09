function AboutController($scope){
  $scope.name = "Pedro Acosta";
}

angular
  .module("ironWorksApp")
  .controller("AboutController", AboutController);