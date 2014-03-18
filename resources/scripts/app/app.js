'use strict';

// http://docs.angularjs.org/api
// http://angularjs.cn/A007
//
// angular.module(name, [requires], configFn);
// Declare app level module which depends on filters, and services
// Then you can create an injector and load your modules like this: var injector
// = angular.injector(['ng', 'myModule'])
// 'ngMock', 'ngMockE2E', 
angular.module('lattice', [ 'ngCookies', 'ngAnimate', 'ngResource', 'ngRoute', 'ui.bootstrap', 'lattice.filters', 'lattice.services', 'lattice.directives', 'lattice.controllers' ]).config([ '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	FastClick.attach(document.body);
	// delete $httpProvider.defaults.headers.common['X-Requested-With'];

	$routeProvider.when('/view1', {
		templateUrl : 'resources/scripts/app/templates/partial1.html',
		controller : 'MyCtrl1',
		resolve : {
			// I will cause a 1 second delay
			delay : function($q, $timeout) {
				var delay = $q.defer();
				$timeout(delay.resolve, 1000);
				return delay.promise;
			}
		}
	}).when('/view2', {
		templateUrl : 'resources/scripts/app/templates/partial2.html',
		controller : 'MyCtrl2'
	}).otherwise({
		redirectTo : '/view1'
	});

	// Configure existing providers
	// $locationProvider.hashPrefix('!')

	// configure html5 to get links working on jsfiddle
	// $locationProvider.html5Mode(true);
} ]);

