angular.module('routeApp').controller('RedController', function($scope, DataService){

  $scope.data = DataService.data;

  // DataService.callServer();

});
