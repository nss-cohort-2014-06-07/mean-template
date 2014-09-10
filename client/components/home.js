(function(){
  'use strict';

  angular.module('mean-template')
  .factory('home', ['$http', function($http){

    function getMessage(){
      return $http.get('/home');
    }

    return {getMessage:getMessage};
  }]);
})();

