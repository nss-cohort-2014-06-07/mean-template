(function(){
  'use strict';

  angular.module('yum.my', ['ngRoute'])
  .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/register', {templateUrl:'/views/register/register.html', controller:'RegisterCtrl'})
    .when('/login', {templateUrl:'/views/login/login.html', controller:'LoginCtrl'})
    .when('/logout', {templateUrl:'/views/logout/logout.html', controller:'LogoutCtrl'})
    .otherwise({redirectTo:'/'});

    $httpProvider.interceptors.push('HttpInterceptor');
  }]);
})();

