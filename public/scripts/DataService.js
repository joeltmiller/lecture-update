angular.module('routeApp').factory('DataService', function($http){

  var data = {};

  function handleSuccess(response){
    console.log(response);
    data.pets = response.data;
    data.fav = "Sweet Dee";
  }

  function handleFailure(response){
    console.log('EVERYTHING\'S ON FIRE', response);
  }

  function makeCall(){
    $http.get('/pets').then(handleSuccess, handleFailure);
  }

  makeCall()

  return {
    data: data,
    callServer: makeCall
  }

})
