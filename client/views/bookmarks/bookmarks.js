(function(){
  'use strict';

  angular.module('yum.my')
  .controller('BookmarksCtrl', ['$scope', 'Category', 'Bookmark', function($scope, Category, Bookmark){
    $scope.categories = [];
    $scope.bookmark = {};
    $scope.bookmarks = [];
    $scope.filtered = [];

    Category.all().then(function(response){
      $scope.categories = response.data.categories;
    });

    Bookmark.all().then(function(response){
      $scope.bookmarks = response.data.bookmarks;
    });

    $scope.filterBookmarks = function(categoryId){
      $scope.filtered = $scope.bookmarks.filter(function(bookmark){
        return bookmark.categoryId === categoryId;
      });
    };

    $scope.markActive = function(category){
      $scope.categories.forEach(function(category){
        category.isActive = false;
      });

      category.isActive = true;
    };

    $scope.addBookmark = function(){
      Bookmark.create($scope.bookmark).then(function(response){
        $scope.bookmarks.push(response.data.bookmark);
        $scope.bookmark = {};
      });
    };

    $scope.addCategory = function(){
      Category.create($scope.name).then(function(response){
        $scope.categories.push(response.data.category);
        $scope.name = '';
      });
    };
  }]);
})();

