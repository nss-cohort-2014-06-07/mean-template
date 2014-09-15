(function(){
  'use strict';

  angular.module('yum.my')
  .controller('NavCtrl', ['$scope', function($scope){
    $scope.$on('authenticated', function(event, email){
      if(email === 'anonymous'){email = null;}
      $scope.email = email;
    });
  }]);
})();

