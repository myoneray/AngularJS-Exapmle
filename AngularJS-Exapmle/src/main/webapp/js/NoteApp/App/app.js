'use strict';
var testApp = angular.module('testApp', [ 'ngRoute', 'testControllers','testFilters' ]);
testApp.config([ '$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider) {
			// 路由模式决定URL样子
			// HTML5 路由模式
			// $locationProvider.html5Mode(false).hashPrefix('!');
			$routeProvider.when('/list', {
				templateUrl : 'html/index-list.html',
				controller : 'listCtrl'
			}).when('/detail/:id', {
				url : '/detail/:id',
				templateUrl : 'html/index-Detail.html',
				controller : 'detailCtrl'
			}).when('/services', {
				templateUrl : 'html/index-services.html',
				controller : 'servicesCtrl'
			}).otherwise({
				redirectTo : '/list'
			});
		} ]);
