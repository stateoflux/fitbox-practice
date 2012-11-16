'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: LoginCtrl});
    $routeProvider.when('/signup', {templateUrl: 'partials/signup.html', controller: SignupCtrl});
    $routeProvider.otherwise({redirectTo: '/login'});
  }]);
