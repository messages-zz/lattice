'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('lattice.services', [ 'ngResource' ], function($provide) {
	// $provide.provider('PP', pp);

	$provide.factory('PP', function() {
		return {
			'hello' : '123'
		};
	});
}).factory('notify', function($window) {
	var msgs = [];
	return function(msg) {
		msgs.push(msg);
		if (msgs.length == 3) {
			$window.alert(msgs.join("\n"));
			msgs = [];
		}
	};
}).factory('phone', [ '$resource', function($resource) {
	return $resource('phones/:phoneId.json', {}, {
		query : {
			method : 'GET',
			params : {
				phoneId : 'phones'
			},
			isArray : true
		}
	});
} ]).service('PP', function() {
	this.abc = '123';
}).value('version', '0.1');
