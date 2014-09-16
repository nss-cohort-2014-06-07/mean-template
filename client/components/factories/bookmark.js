(function(){
  'use strict';

  angular.module('yum.my')
  .factory('Bookmark', ['$http', function($http){

    function create(bookmark){
      return $http.post('/bookmarks', bookmark);
    }

    function all(){
      return $http.get('/bookmarks');
    }

    return {create:create, all:all};
  }]);
})();

