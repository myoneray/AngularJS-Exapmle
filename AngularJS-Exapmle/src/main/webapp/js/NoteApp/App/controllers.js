'use strict';

/* Controllers */

var controllers = angular.module('controllers', []);

controllers.controller('listCtrl', [ '$scope', '$http',
		function($scope, $http) {
			$http.get('json/app.json').success(function(data) {
				$scope.testDatas = data;
			});
			$scope.orderProp = 'add';
		} ]);
controllers.controller('detailCtrl', [
		'$scope',
		'$routeParams',
		'$http',
		function($scope, $routeParams, $http) {
			console.log(" $routeParams.phoneId" + $routeParams.id);
			$http.get('json/' + $routeParams.id+ '.json').success(
					function(data) {
						$scope.temp = data;
					});
		} ]);
