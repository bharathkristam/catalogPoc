var app=angular.module('serviceCatalog', []);

app.controller('ViewCtrl', function($scope,$http) {

  $http.get("data/family.json").then(function(response){
    $scope.myData = response.data;
  });
});