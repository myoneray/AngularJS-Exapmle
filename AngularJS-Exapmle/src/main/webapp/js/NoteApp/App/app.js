'use strict';
var testApp = angular.module('testApp', [ 'ngRoute',
		'controllers' ]);
testApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/list', {
		templateUrl : 'html/index-list.html',
		controller : 'listCtrl'
	}).when('/detail/:tel', {
		templateUrl : 'html/index-Detail.html',
		controller : 'detailCtrl'
	}).otherwise({
		redirectTo : '/list'
	});
} ]);
