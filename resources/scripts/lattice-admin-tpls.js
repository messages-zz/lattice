angular.module('lattice.admin.tpls', [ 
            'resources/templates/partials/diskList.html',
			'resources/templates/partials/home.html',
			'resources/templates/partials/imageList.html'
		]);

angular.module("resources/templates/partials/diskList.html", []).run(
		[ "$templateCache", function($templateCache) {
			"use strict";
			$templateCache.put("resources/templates/partials/diskList.html", "");
		} ]);

angular.module("resources/templates/partials/home.html", []).run(
		[ "$templateCache", function($templateCache) {
			"use strict";
			$templateCache.put("resources/templates/partials/home.html", "");
		} ]);

angular.module("resources/templates/partials/imageList.html", []).run(
		[ "$templateCache", function($templateCache) {
			"use strict";
			$templateCache.put("resources/templates/partials/imageList.html", "");
		} ]);