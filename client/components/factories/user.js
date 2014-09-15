(function(){
  'use strict';

  angular.module('yum.my')
  .factory('User', ['$http', function($http){

    function register(user){
      return $http.post('/register', user);
    }

    function login(user){
      return $http.post('/login', user);
    }

    function logout(){
      return $http.delete('/logout');
    }

    return {register:register, login:login, logout:logout};
  }]);
})();

