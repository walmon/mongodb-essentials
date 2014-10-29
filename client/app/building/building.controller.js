'use strict';

angular.module('outcodingApp')
  .controller('BuildingCtrl', function ($scope, $http, socket) {
    $scope.awesomeThings = [];

    $http.get('/api/buildings').success(function(awesomeBuildings) {
        console.log(awesomeBuildings);
      $scope.awesomeBuildings = awesomeBuildings;
      socket.syncUpdates('building', $scope.awesomeBuildings);
    });

    $scope.addBuilding = function() {
        console.log($scope.newBuilding);
        //$scope.newBuilding = building;
      if($scope.newBuilding === '') {
        return;
      }
      $http.post('/api/buildings', $scope.newBuilding );
      $scope.newBuilding = '';
    };

    $scope.deleteBuilding = function(building) {
      $http.delete('/api/buildings/' + building._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('buildings');
    });
  });
