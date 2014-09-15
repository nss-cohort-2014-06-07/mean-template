(function(){
  'use strict';

  angular.module('yum.my')
  .controller('LoginCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
    $scope.user = {};

    function success(response){
      debugger;
    }

    function failure(response){
      debugger;
    }

    $scope.login = function(){
      User.login($scope.user).then(success, failure);
    };
  }]);
})();

