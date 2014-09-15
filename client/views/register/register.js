(function(){
  'use strict';

  angular.module('yum.my')
  .controller('RegisterCtrl', ['$scope', function($scope){
    $scope.user = {};

    $scope.register = function(){
      $scope.user = {};
    };
  }]);
})();

