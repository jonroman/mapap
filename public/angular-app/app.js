angular.module('mapquest', ['ngRoute']).config(config);

function config($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/map', {
      templateUrl: 'angular-app/map/map.html',
      controller: MapController,
      controllerAs: 'vm'
    });
}
