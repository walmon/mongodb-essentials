'use strict';

describe('Controller: BuildingCtrl', function () {

  // load the controller's module
  beforeEach(module('outcodingApp'));
  beforeEach(module('socketMock'));

  var MainCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/buildings')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    MainCtrl = $controller('BuildingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of buildings to the scope', function () {
    $httpBackend.flush();
    expect(scope.awesomeBuildings.length).toBe(4);
  });
});
