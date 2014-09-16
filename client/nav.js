(function(){
  'use strict';

  angular.module('mean-template')
  .controller('NavCtrl', ['$scope', '$localForage', function($scope, $localForage){
    $localForage.getItem('email').then(function(email){
      $scope.email = email;
    });

    $scope.$on('authenticated', function(event, email){
      if(email === 'anonymous'){email = null;}

      $localForage.setItem('email', email).then(function(){
        $scope.email = email;
      });
    });
  }]);
})();

