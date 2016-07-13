angular.module('routeApp').controller('GreenController', function($scope, DataService){

  $scope.data = DataService.data;

});
