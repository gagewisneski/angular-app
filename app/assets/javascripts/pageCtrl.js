(function(){
  "use stricy";

  angular.module("app").controller("pageCtrl", function($scope) {

    $scope.message = "Hello!";
    $scope.hey = "Hey!";
    $scope.bye = "Bye!";

    window.$scope = $scope;

  });



})();