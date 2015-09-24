'use strict';

/* Filters  定制过滤器*/

angular.module('testFilters', []).filter('filtersName', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});

//我们的过滤器命名为checkmark。
//它的输入要么是true，要么是false，并且我们返回两个表示true或false的unicode字符（\u2713和\u2718）。
//现在我们的过滤器准备好了，
//我们需要将我们的phonecatFilters模块作为一个依赖注册到我们的主模块phonecat上。