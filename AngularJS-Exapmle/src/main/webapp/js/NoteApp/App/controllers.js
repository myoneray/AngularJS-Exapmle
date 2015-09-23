'use strict';
var testApp = angular.module('testApp', []);
testApp.controller('testCtrl', [ '$scope', '$http', function($scope, $http) {
	$scope.orderProp = 'add';// 默认按照add 排序
	$http.get('js/NoteApp/App/app.json').success(function(data) {
		$scope.testDatas = data;
		$scope.testDatas = data.splice(0, 7);//只顯示前５個
	})
}]);

//我们在控制器中使用AngularJS服务$http向你的Web服务器发起一个HTTP请求，以此从json文件中获取数据。
//$http仅仅是AngularJS众多内建服务中之一，这些服务可以处理一些Web应用的通用操作。
//AngularJS能将这些o服务注入到任何你需要它们的地方。