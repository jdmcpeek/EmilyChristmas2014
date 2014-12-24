'use strict';

/**
 * @ngdoc overview
 * @name emilyChristmas2014App
 * @description
 * # emilyChristmas2014App
 *
 * Main module of the application.
 */
angular
  .module('emilyChristmas2014App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngAudio'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
