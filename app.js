var app = angular.module('addToDoList', []);
// This is declaring a module. More on this in a moment
  app.controller('ToDoListCtrl', function($scope){ $scope.list = ['eg. Pay DTE Bill'];
  $scope.add=  function(){
  $scope.list.push($scope.newitem);
  };
});
