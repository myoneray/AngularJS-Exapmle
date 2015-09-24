'use strict';

/* Controllers */

var testControllers = angular.module('testControllers', []);

testControllers.controller('listCtrl', [ '$scope', '$http',
		function($scope, $http) {
			$http.get('json/app.json').success(function(data) {
				$scope.testDatas = data;
			});
			$scope.orderProp = 'add';
		} ]);
testControllers.controller('detailCtrl', [
		'$scope',
		'$routeParams',
		'$http',
		function($scope, $routeParams, $http) {
			console.log(" $routeParams.phoneId" + $routeParams.id);
			$http.get('json/' + $routeParams.id + '.json').success(
					function(data) {
						$scope.temp = data;
						$scope.mainImageUrl = data.images[0];
					});
			$scope.setImage = function(imageUrl) {
				$scope.mainImageUrl = imageUrl;
			}
		} ]);
