'use strict';

/**
 * @ngdoc overview
 * @name manhattanApp
 * @description
 * # manhattanApp
 *
 * Main module of the application.
 */
angular
  .module('manhattanApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/open-account/index.html',
        controller: 'openAccountCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
