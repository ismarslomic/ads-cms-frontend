'use strict';

var frontendApp = angular.module('adsCmsFrontendApp', ['ngResource', 'ngRoute'])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/partials/list.html',
        controller: 'MediaPlayerController'
      }).otherwise({
        redirectTo: '/'
      });
  }]);
