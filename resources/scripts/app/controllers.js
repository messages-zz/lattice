'use strict';

/* Controllers */

angular.module('lattice.controllers', []).controller('MyCtrl1', [ '$scope', function($scope) {
	

} ]).controller('MyCtrl2', function($scope, $route, $routeParams, $location) {
	
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	
	// $scope.name = "BookCntl";
	// $scope.params = $routeParams;
} ).controller('MyController', function($scope) {

	$scope.person = {
		name : "Ari Lerner"
	};
}).controller('AlertDemoCtrl', function($scope, $http) {

	$scope.alerts = [ {
		type : 'danger',
		msg : 'Oh snap! Change a few things up and try submitting again.'
	}, {
		type : 'success',
		msg : 'Well done! You successfully read this important alert message.'
	} ];

	$scope.addAlert = function() {
		$http({  
			method: 'JSONP',  
			url: 'http://www.ticeng.com/json?callback=JSON_CALLBACK'
		}).success(function(data, status, headers, config) {  
			// data contains the response  
			// status is the HTTP status  
			// headers is the header getter function  
			// config is the object that was used to create the HTTP request
			// alert(data);
		}).error(function(data, status, headers, config) {
			// alert();
		});
		
		$scope.alerts.push({
			msg : "Another alert!"
		});
	};

	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};
}).controller("SomeController",function($scope) {
	
    $scope.expanders = [{
        title : 'Click me to expand',
        text : 'Hi there folks, I am the content that was hidden but is now shown.'
    }, {
        title : 'Click this',
        text : 'I am even better text than you have seen previously'
    }, {
        title : 'Test',
        text : 'test'
    }];
});
