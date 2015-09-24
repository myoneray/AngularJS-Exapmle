'use strict';

/* Controllers */

var controllers = angular.module('controllers', []);

controllers.controller('listCtrl', [ '$scope', '$http',
		function($scope, $http) {
			$http.get('js/NoteApp/App/app.json').success(function(data) {
				$scope.testDatas = data;
			});
			$scope.orderProp = 'add';
		} ]);
controllers.controller('detailCtrl', [ '$scope', '$routeParams',
		function($scope, $routeParams) {
			$scope.tel = $routeParams.tel;
		} ]);
