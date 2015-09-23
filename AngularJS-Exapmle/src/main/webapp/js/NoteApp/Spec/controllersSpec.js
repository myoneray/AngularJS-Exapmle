'use strict';

describe('testApp', function() {
	describe('testCtrl', function() {
		var scope, ctrl;
		beforeEach(function() {
			scope = {}, ctrl = new testDatas(scope);
		});
		it('数组中有３个姓名', function() {
			expect(scope.ctrl.length).toBe(3);
		});
		it('默认值时地址', function() {
			expect(scope.orderProp).toBe('add');
		});
	});
});