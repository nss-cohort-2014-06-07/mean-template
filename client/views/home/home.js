(function(){
  'use strict';

  angular.module('yum.my')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){
    Home.getMessage().then(function(response){
      $scope.mean = response.data.mean;

      $interval(function(){
        $scope.mean = _.shuffle($scope.mean);
      }, 500);
    });
  }]);
})();

