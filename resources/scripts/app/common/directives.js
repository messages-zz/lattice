'use strict';

/* Directives */

angular.module('lattice.directives', []).directive('version', [ 'version', function(version) {
	return function(scope, element, attrs) {

		// var type = attrs.type || 'text';
		// var required = attrs.hasOwnProperty('required') ?
		// "required='required'" : "";

		element.text(version);
		// element.html(htmlText);
		// element.replaceWith(htmlText);
	};
} ]).directive('currentTime', function($interval, dateFilter) {

	function link(scope, element, attrs) {
		
		// scope.format = 'M/d/yy h:mm:ss a';
		// scope.format = 'yyyy-MM-dd HH:mm:ss';
		
		var format, timeoutId;

		function updateTime() {
			element.text(dateFilter(new Date(), format));
		}

		scope.$watch(attrs.currentTime, function(value) {
			format = value;
			updateTime();
		});

		element.on('$destroy', function() {
			$interval.cancel(timeoutId);
		});

		// start the UI update process; save the timeoutId for canceling
		timeoutId = $interval(function() {
			updateTime(); // update DOM
		}, 1000);
	}

	return {
		link : link
	};
}).directive('uiAccordion', function() {
	return {
		restrict : 'EA',
		replace : true,
		transclude : true,
		template : '<div ng-transclude></div>',
		controller : function() {

			var expanders = [];
			this.gotOpened = function(selectedExpander) {
				angular.forEach(expanders, function(expander) {
					if (selectedExpander != expander) {
						expander.showMe = false;
					}
				});
			}
			this.addExpander = function(expander) {
				expanders.push(expander);
			}
		}
	}
}).directive('expander', function() {
	return {
		// E元素<my-directive></my-directive>
		// A属性<div my-directive="var"></div>
		// C样式类<div class="my-directive:var"></div>
		// M注释<!-- directive: my-directive var -->
		restrict : 'EA',
		replace : true,
		transclude : true,
		require : '^?uiAccordion',
		scope : {
			title : '=expanderTitle'
		},
		template : '<div>' + '<div class="title" ng-click="toggle()">{{title}}</div>' + '<div class="body" ng-show="showMe" ng-transclude></div>' + '</div>',
		link : function(scope, element, attrs, accordionController) {
			scope.showMe = false;
			accordionController.addExpander(scope);
			scope.toggle = function toggle() {
				scope.showMe = !scope.showMe;
				accordionController.gotOpened(scope);
			}
		}
	};
}).directive('topbar', function($compile, $parse) {
	return {
		// AEC
		restrict : 'AE',
		replace : true,
		transclude : true,
		// template : '<div>' + '</div>',
		// template: function(element, attrs) { },
		templateUrl : 'resources/templates/common/topbar.html',
		compile : function(element, attrs) {
			// do whatever else is necessary
			// var fieldGetter = $parse(attrs.field);
			//
			// return function (scope, element, attrs) {
			// var template, field, id;
			// field = fieldGetter(scope);
			// template = '..your dom structure here...';
			// alert($compile(template));
			// // element.replaceWith($compile(template)(scope));
			// }
		},
		// scope: {
		// label: 'bind',
		// formId: 'bind'
		// customerInfo: '=info'
		// },
		controller : 'TopbarController',
		link : function(scope, element, attrs) {

		}
	}
}).directive('navbar', function() {

	function link(scope, element, attrs) {
		// scope.isActive = true;
		
	}

	return {
		restrict : 'EA',
		replace : true,
		transclude : true,
		templateUrl : 'resources/templates/common/navbar.html',
		controller : 'NavbarController',
		link : link
	}
});
