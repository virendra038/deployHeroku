'use strict';

/**
 * @ngdoc function
 * @name deployHerokuApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the deployHerokuApp
 */
angular.module('deployHerokuApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
