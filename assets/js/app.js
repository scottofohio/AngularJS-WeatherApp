'use strict';

/**
 * @ngdoc overview
 * @name weatherAppApp
 * @description
 * # weatherAppApp
 *
 * Main module of the application.
 */
angular
  .module('weatherAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/current-conditions.html',
        controller: 'getWeather',
        controllerAs: 'current-conditions'
      })
      // .when('/five-day', {
      //   templateUrl: 'views/five-day.html',
      //   controller: 'getWeather',
      //   controllerAs: 'five-day'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
