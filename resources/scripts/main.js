/**
 * main.js requrie main entrance
 * 
 * @Created by hongquanli<hongquanli@qq.com>
 * @Date 2014-03-14 17:35:00
 */
/*
 * require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB,
 * moduleC){ // some code here });
 */
;
(function() {

	// third-party vendor
	var vendorPath = '../../resources/third-party';
	var applicationPath = '../../scripts/app';
	require.config({
		// 为了在IE中正确检错，强制define/shim导出检测
		// enforceDefine : true,
		packages : [ {
			name : 'dojo',
			location : 'dojo',
			main : 'lib/main-browser',
			lib : '.'
		} ],
		// By default load any module IDs from resources/scripts/
		baseUrl : 'resources/scripts/',
		// the paths config could be for a directory.
		paths : {
			'domReady' : vendorPath + '/angular/domReady',
			'angular' : vendorPath + '/angular/angular',
			'angular-route' : vendorPath + '/angular-route/angular-route',
			'angular-resource' : vendorPath + '/angular-resource/angular-resource',
			'angular-animate' : vendorPath + '/angular-animate/angular-animate',
			'angular-cookies' : vendorPath + '/angular-cookies/angular-cookies',
			'angular-sanitize' : vendorPath + '/angular-sanitize/angular-sanitize',
			'angular-growl' : vendorPath + '/angular-growl/build/angular-growl',
			'angular-loading-bar' : vendorPath + '/angular-loading-bar/build/loading-bar',
			'ui.router' : vendorPath + '/angular-ui-router/release/angular-ui-router',
			'ui.bootstrap' : vendorPath + '/angular-bootstrap/ui-bootstrap',
			'angular-slider' : vendorPath + '/angular-slider/angular-slider',
			'angular-colorpicker' : vendorPath + '/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module',
			'jQuery' : [ 
			            'http://cdn.staticfile.org/jquery/2.1.0/jquery.min',
						// 若CDN加载错，则从如下位置重试加载
						vendorPath + '/jquery/jquery.min'
			],
			'jquerymobile' : 'vendor/jquery.mobile-1.3.0',
			'jstorage' : 'vendor/jstorage', 
			'underscore': [ 'http://cdn.staticfile.org/underscore.js/1.6.0/underscore-min', 'vendor/underscore' ],
			'bootstrap' : vendorPath + '/bootstrap/bootstrap.min',
			'highcharts' : vendorPath + '/highcharts/highcharts',
			'spinjs' : vendorPath + '/spinjs/spin',
			'lattice-admin-tpls' : 'lattice-admin-tpls'
		},
		// waitSeconds: 15,
		shim : {
			'jQuery' : {
				exports : 'jQuery'
			},
			'jquerymobile' : {
				deps: [ 'css!../css/jquery.mobile-1.3.0.min.css' ]
			},
			'underscore': { 
				exports: '_' 
	        },
			'angular' : {
				exports : 'angular',
				deps : [ 'jQuery' ]
			},
			'angular-animate' : {
				deps : [ 'angular' ]
			},
			'angular-resource' : {
				deps : [ 'angular' ]
			},
			'angular-cookies' : {
				deps : [ 'angular' ]
			},
			'angular-sanitize' : {
				deps : [ 'angular' ]
			},
			'angular-growl' : {
				deps : [ 'angular' ]
			},
			'angular-slider' : {
				deps : [ 'angular' ]
			},
			'angular-colorpicker' : {
				deps : [ 'angular' ]
			},
			'angular-loading-bar' : {
				deps : [ 'angular' ]
			},
			'ui.router' : {
				deps : [ 'angular' ]
			},
			'bootstrap' : {
				deps : [ 'jQuery' ]
			},
			// 'aliyun-console-bootstrap-tpl' : {
			// deps : [ 'angular' ]
			// },
			// 'ui.bootstrap' : {
			// deps : [ 'aliyun-console-bootstrap-tpl' ]
			// },
			// 'console.tpl' : {
			// deps : [ 'angular' ]
			// },
			'highcharts' : {
				deps : [ 'jQuery' ]
			},
			'spinjs' : {},
			'lattice-admin-tpls' : {
				deps:['angular']
			}
		},
		ready : function() {
			alert('');
			// require([ 'my/module' ], function(module) {
			// });
		}
	});
}());

// require([ 'domReady' ], function(domReady) {
// domReady(function() {
// // 一旦DOM准备就绪，本回调就执行。
// // 在此函数中查询及处理DOM是安全的。
// });
// });

// Start the main app logic.
require([ 'domReady!', 'jQuery', 'bootstrap' ], function(doc, $, bootstrap) {
	// 本函数会在DOM ready时调用。
    // 注意'domReady!'的值为当前的document
	
	console.log('jQuery version:', $.fn.jquery);
});