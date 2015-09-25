'use strict';

/* Controllers */
var testControllers = angular.module('testControllers', []);

// 创建服务: 使用angular.moudle的factory API创建githubSevices服务
testControllers.factory('githubSevices', function($http) {
	var githubUrl = "githubUrl";
	var runUserReq = function(name, path) {
		return $http({
			method : 'JSONP',
			url : githubUrl + "/" + name + "/" + path
		});
	}
	return {
		events : function(name) {
			return runUserReq(name, 'event');
		}
	};
});
// 调用服务
testControllers.controller('servicesCtrl', [ '$scope', '$http',
		'githubSevices', function($scope, $http, githubSevices) {
			$scope.sengReq = function() {
				$scope.githubSevices = githubSevices.events('MAIZI');
			}
		} ]);

// 工厂
testControllers.factory('testFactory', function() {
	return {
		show : function(imageUrl) {
			console.log("工厂测试:", imageUrl);
		}
	}
});

// 控制器
testControllers.controller('listCtrl', [ '$scope', '$http',
		function($scope, $http) {
			$http.get('json/app.json').success(function(data) {
				$scope.testDatas = data;
			});
			$scope.orderProp = 'add';
		} ]);
// 控制器
testControllers.controller('detailCtrl', [
		'$scope',
		'$routeParams',
		'$http',
		'testFactory',
		function($scope, $routeParams, $http, testFactory) {
			$http.get('json/' + $routeParams.id + '.json').success(
					function(data) {
						$scope.temp = data;
						$scope.mainImageUrl = data.images[0];
					});
			$scope.setImage = function(imageUrl) {
				testFactory.show(imageUrl);
				$scope.mainImageUrl = imageUrl;
			}
		} ]);
