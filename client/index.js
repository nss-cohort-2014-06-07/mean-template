(function(){
  'use strict';

  angular.module('mean-template', [])
  .controller('MainController', ['$scope', '$interval', function($scope, $interval){
    var occupations = ['Superheroes', 'Ninjas', 'Pirates', 'Vampires', 'Aliens', 'Dragons', 'Sharks with Lasers', 'Transformers', 'I am Groot'];

    $scope.title = 'Mean Template';
    $scope.occupation = occupations[0];

    $interval(function(){
      var rnd = Math.floor(Math.random() * occupations.length);
      $scope.occupation = occupations[rnd];
    }, 500);
  }]);
})();

