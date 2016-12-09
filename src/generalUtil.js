/**
 * @author ocean
 * @name 一般工具 
 * @module
 */

//判斷有無數值
export const hasVal=(val)=>(!(val===null || typeof val === 'undefined' || val === '' || val===false))

//數值轉字串
export const toStr=(number)=>(
	hasVal(number) && !isNaN(number)
		? number+''
		: null
)

//字串轉10進數值
export const toInt=(numStr)=>(
	hasVal(numStr)
		? parseInt(numStr, 10)
		: NaN
)

//取整數
export const clearFloat=(number)=>(
	hasVal(number) && !isNaN(number)
		? number | 0
		: NaN
)

export const filterInt=(value)=>(
  /^(\-|\+)?([0-9]+|Infinity)$/.test(value)
  	? Number(value)
  	: NaN
)

export const filterFloat=(value)=>(
	/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value)
		? Number(value)
		: NaN
)

export default {
	hasVal : hasVal,
	toStr : toStr,
	toInt : toInt,
	clearFloat : clearFloat,
	filterInt : filterInt,
	filterFloat : filterFloat
}
