'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
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

var generalUtil = {
	hasVal: hasVal,
	toStr: toStr,
	toInt: toInt,
	clearFloat: clearFloat,
	filterInt: filterInt,
	filterFloat: filterFloat
};

if (!window.generalUtil) {
	window.generalUtil = generalUtil;
}

exports.default = generalUtil;