'use strict';
var testApp = angular.module('testApp', [ 'ngRoute',
		'testControllers' ,'testFilters']);
testApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/list', {
		templateUrl : 'html/index-list.html',
		controller : 'listCtrl'
	}).when('/detail/:id', {
		templateUrl : 'html/index-Detail.html',
		controller : 'detailCtrl'
	}).otherwise({
		redirectTo : '/list'
	});
} ]);
