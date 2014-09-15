(function(){
  'use strict';

  angular.module('yum.my')
  .controller('RegisterCtrl', ['$scope', 'User', function($scope, User){
    $scope.user = {};

    function success(response){
      toastr.success('User successfully registered.');
    }

    function failure(response){
      toastr.error('Error during user registration, try again.');
    }

    $scope.register = function(){
      User.register($scope.user).then(success, failure);
    };
  }]);
})();

