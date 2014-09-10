(function(){
  'use strict';

  angular.module('mean-template')
  .controller('HomeCtrl', ['$scope', '$interval', 'home', function($scope, $interval, home){
    home.getMessage().then(function(response){
      $scope.mean = response.data.mean;

      $interval(function(){
        $scope.mean = _.shuffle($scope.mean);
      }, 500);
    });
  }]);
})();

