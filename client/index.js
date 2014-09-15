(function(){
  'use strict';

  angular.module('yum.my', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/register', {templateUrl:'/views/register/register.html', controller:'RegisterCtrl'})
    .otherwise({redirectTo:'/'});
  }]);
})();

