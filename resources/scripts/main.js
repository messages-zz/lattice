/**
 * requrie main entrance
 * 
 * @Created by hongquanli<hongquanli@qq.com>
 * @Date 2014-03-14 17:35:00
 */
;(function() {
	var vendorPath = '../../vendor';
	var consolePath = '../../scripts';
	require.config({
		baseUrl : 'scripts/',
		paths : {
			'angular' : vendorPath + '/angular/angular',
			'angular-route' : vendorPath + '/angular-route/angular-route',
			'angular-resource' : vendorPath + '/angular-resource/angular-resource',
			'angular-animate' : vendorPath + '/angular-animate/angular-animate',
			'angular-cookies' : vendorPath + '/angular-cookies/angular-cookies',
			'angular-sanitize' : vendorPath + '/angular-sanitize/angular-sanitize',
			'angular-growl' : vendorPath + '/angular-growl/build/angular-growl',
			'ui.router' : vendorPath + '/angular-ui-router/release/angular-ui-router',
			'ui.bootstrap' : vendorPath + '/angular-bootstrap/ui-bootstrap',
			'angular-slider' : vendorPath + '/angular-slider/angular-slider',
			'angular-colorpicker' : vendorPath + '/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module',
			'jQuery' : vendorPath + '/jquery/jquery.min',
			'highcharts' : vendorPath + '/highcharts/highcharts',
			'angular-loading-bar' : vendorPath + '/angular-loading-bar/build/loading-bar',
			'console.tpl' : consolePath + '/aliyun-console-tpl',
			'aliyun-console-bootstrap-tpl' : consolePath + '/aliyun-console-bootstrap-tpl',
			'home-tpl' : 'aliyun-console-home-tpl',
			'common' : consolePath,
			'bootstrap' : 'bootstrap',
			'spinjs' : vendorPath + '/spinjs/spin',
			'app' : 'app'
		},
		shim : {
			'jQuery' : {
				exports : 'jQuery'
			},
			'angular' : {
				exports : 'angular',
				deps : [ 'jQuery' ]
			},
			'ui.router' : {
				deps : [ 'angular' ]
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
			'aliyun-console-bootstrap-tpl' : {
				deps : [ 'angular' ]
			},
			'ui.bootstrap' : {
				deps : [ 'aliyun-console-bootstrap-tpl' ]
			},
			'console.tpl' : {
				deps : [ 'angular' ]
			},
			'highcharts' : {
				deps : [ 'jQuery' ]
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
			'spinjs' : {},
			'home-tpl' : {
				deps : [ 'angular' ]
			}
		}
	});
}());