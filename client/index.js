(function(){
  'use strict';

  angular.module('mean-template', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .otherwise({redirectTo:'/'});
  }]);
})();

