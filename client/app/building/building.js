'use strict';

angular.module('outcodingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('building', {
        url: '/building',
        templateUrl: 'app/building/building.html',
        controller: 'BuildingCtrl'
      });
  });