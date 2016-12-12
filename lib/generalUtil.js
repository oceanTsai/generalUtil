'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * @author ocean
 * @name 一般工具 
 * @module
 */

//判斷有無數值
var hasVal = exports.hasVal = function hasVal(val) {
	return !(val === null || typeof val === 'undefined' || val === '' || val === false);
};

//數值轉字串
var toStr = exports.toStr = function toStr(number) {
	return hasVal(number) ? number + '' : null;
};

//字串轉10進數值
var toInt = exports.toInt = function toInt(numStr) {
	return hasVal(numStr) ? parseInt(numStr, 10) : NaN;
};

//取整數
var clearFloat = exports.clearFloat = function clearFloat(number) {
	return hasVal(number) && !isNaN(number) ? number | 0 : NaN;
};

var filterInt = exports.filterInt = function filterInt(value) {
	return (/^(\-|\+)?([0-9]+|Infinity)$/.test(value) ? Number(value) : NaN
	);
};

var filterFloat = exports.filterFloat = function filterFloat(value) {
	return (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value) ? Number(value) : NaN
	);
};

var conditionLevel1 = function conditionLevel1(val) {
	return !(val === null || typeof val === 'undefined');
};
var conditionLevel2 = function conditionLevel2(val) {
	return !(val === null || typeof val === 'undefined' || val === '');
};
var conditionLevel3 = function conditionLevel3(val) {
	return !(val === null || typeof val === 'undefined' || val === '' || val === '-1' || val === -1);
};

//過濾掉空欄位
var filterEmptyField = exports.filterEmptyField = function filterEmptyField(item) {
	var conditionLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1';

	if (hasVal(item)) {
		var keys = Object.keys(item);
		if (hasVal(keys)) {
			var _ret = function () {
				var result = {};
				var fun = conditionLevel1;
				switch (conditionLevel) {
					case '1':
						fun = conditionLevel1;
						break;
					case '2':
						fun = conditionLevel2;
						break;
					case '3':
						fun = conditionLevel3;
						break;
				}
				keys.forEach(function (key) {
					var val = item[key];
					fun(val) && (result[key] = val);
				});
				return {
					v: result
				};
			}();

			if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
		} else {
			return item;
		}
	} else {
		return item;
	}
};

var generalUtil = {
	hasVal: hasVal,
	toStr: toStr,
	toInt: toInt,
	clearFloat: clearFloat,
	filterInt: filterInt,
	filterFloat: filterFloat,
	filterEmptyField: filterEmptyField
};

if (!window.generalUtil) {
	window.generalUtil = generalUtil;
}

exports.default = generalUtil;