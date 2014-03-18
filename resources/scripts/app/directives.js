'use strict';

/* Directives */

angular.module('lattice.directives', []).directive('uiAccordion', function() {
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
		transclude: true,
		require : '^?uiAccordion',
		scope : {
            title : '=expanderTitle'
        },
		template : '<div>' 
			+ '<div class="title" ng-click="toggle()">{{title}}</div>' 
			+ '<div class="body" ng-show="showMe" ng-transclude></div>' 
			+ '</div>',
		link : function(scope, element, attrs, accordionController) {
			scope.showMe = false;
            accordionController.addExpander(scope);
            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
                accordionController.gotOpened(scope);
            }
		}
	};
}).directive('appVersion', [ 'version', function(version) {
	return function(scope, elm, attrs) {
		elm.text(version);
	};
} ]);
