'use strict';

var todoApp = angular.module('todoApp', ['firebase', 'ngRoute']);

todoApp.config(['$locationProvider', function($locationProvider){
  $locationProvider.html5Mode(true);
}]);

todoApp.filter('todoFilter', function ($location) {
  return function (input) {
    var filtered = {};
    angular.forEach(input, function (todo, id) {
      var path = $location.path();
      if (path === '/active') {
        if (!todo.completed) {
          filtered[id] = todo;
        }
      } else if (path === '/completed') {
        if (todo.completed) {
          filtered[id] = todo;
        }
      } else {
        filtered[id] = todo;
      }
    });
    return filtered;
  };
});