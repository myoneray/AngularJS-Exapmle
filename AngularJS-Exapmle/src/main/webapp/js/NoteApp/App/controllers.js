'use strict';

/* Controllers */
var testControllers = angular.module('testControllers', []);

// 工厂
testControllers.factory('testFactory', function() {
    return {
        show : function(imageUrl) {
            console.log("工厂测试:",imageUrl);
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
testControllers.controller('detailCtrl', ['$scope','$routeParams','$http','testFactory',
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
