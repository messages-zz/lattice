'use strict';

/* Controllers */

angular.module('lattice.controllers', ['ngResource']).controller('MyCtrl1', [ '$scope', function($scope) {
	

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
}).controller("SomeController", function($scope) {
	
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
}).controller("CurrentController", function($scope) {
	
    $scope.format = 'yyyy-MM-dd HH:mm:ss';
    
}).constant('topbarConfig', {
	
	// 常量
	activeClass: 'active',
	toggleEvent: 'click'
}).controller("TopbarController", function($scope, $location) {
	
    // $scope
	var menus = $scope.menus = [
		{name:'首页', path:'index', id:'', children : [ ]},
		{name:'商品', path:'product', id:'', children : [ 
            {name:'商品管理', path:'product/management', code:''},
    		{name:'商品分类', path:'product/categories', code:''} 
        ]},
		{name:'定单', path:'order', id:'', children : [ 
            {name:'订单管理', path:'order/management', code:''},
    		{name:'收款管理', path:'order/payment', code:''} 
        ]}
	];
	
	$scope.isActive = function(route, index) {
        var isActive = ($location.path().indexOf(route) != -1);
        if(isActive){
    		var navs = $scope.navs = menus[index].children;
    	}
        return isActive;
    }
	
	
	
}).controller("NavbarController", function($scope, $location, $resource) {
	
	$scope.active = function(route) {
        return route === $location.path();
	}
	
	
//	var actions = {
//		create: {method: 'POST', params: {method: 'create'}},
//		read: {method: 'POST', params: {method: 'read'}},
//		update: {method: 'POST', params: {method: 'update'}},
//		delete: {method: 'POST', params: {method: 'delete'}},
//		multi: {method: 'POST', params: {method: 'multi'}}
//	}
//	var Book = $resource('/book', {}, actions);
//	
//	var book = Book.read({id: '123'}, function(response){
//		console.log(response);
//	});
//	
//	var book = Book.read({get: 'haha'}, {id: '123'},
//		function(response){
//			console.log(response);
//		},
//		function(error){
//			console.log(error);
//		}
//	);
//	
//	//响应的数据是 {result: 0, msg: '', obj: {id: 'xxx'}}
//	var book = Book.create({title: '测试标题', author: '测试作者'}, function(response){
//		console.log(book);
//	});
//	
//	$http.defaults.transformResponse = function(data){return angular.fromJson(data).obj};
//	
//	var p = {title: '测试标题', author: '测试作者'};
//	var book = Book.create(p, function(response){
//		angular.extend(book, p);
//		console.log(book);
//	});
//	  
//	book.title = '新标题'
//	book.$update(function(response){
//		console.log(book);
//	});
//
//	book.title = '新标题'
//	book.$update();
	  
	  
});
