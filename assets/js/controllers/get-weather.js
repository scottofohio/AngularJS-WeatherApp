'use strict';
/**
 * @ngdoc function
 * @name weatherAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherAppApp
 */
angular.module('weatherAppApp').factory('$localstorage', ['$window', function ($window) {
  return {
    set: function (key, value) {
      $window.localStorage[key] = value;
    },
    get: function (key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function (key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function (key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  };
}]).controller('getWeather', function ($http, $scope, $localstorage) {
  var location,
    apiKey = 'bdc8c7a123a522f95a25be48159cfa8f',
    unitFormat = 'imperial',
    day = 'weather';

  function CallWeather(a, b, c, d) {
    $http({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/' + d + a + '&units=' + b + '&appid=' + c
    }).then(function successCallback(response) {
      $scope.results = response.data;
      $scope.roundedTemp = $scope.results.main.temp;
    }, function errorCallback(response) {
      $scope.results = response.data;
    });
  }
  //check the current weather 
  $scope.localWeather = function () {
    //Default Location
    location = '?q=New York';
    $scope.master = {};
    $scope.myLocation = function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          $scope.$apply(function () {
            $scope.position = position;
            $scope.lat = $scope.position.coords.latitude;
            $scope.lon = $scope.position.coords.longitude;
            // change location cordinated for API call
            location = '?lat=' + $scope.lat + '&lon=' + $scope.lon;
            //Set location in local storage.
            $localstorage.set('user-location', location);
            new CallWeather(location, unitFormat, apiKey, day);
          });
        });
      }
    };
    $scope.update = function (city) {
      var cityLoc;
      $scope.master = angular.copy(city);
      if (isNaN($scope.master.city) === true) {
        cityLoc = '?q=' + $scope.master.city;
      } else {
        cityLoc = '?zip=' + $scope.master.city;
      }
      $localstorage.set('user-location', cityLoc);
      new CallWeather(cityLoc, unitFormat, apiKey, day);
    };
    if ($localstorage.get('user-location') !== undefined) {
      location = $localstorage.get('user-location');
    }
    new CallWeather(location, unitFormat, apiKey, day);
  };

  $scope.fourOPage = function() {
    $scope.ReturnMessage = function() {
      return 'text';
    }  
  }
});
