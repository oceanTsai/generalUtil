/**
 * @author ocean
 * @name 一般工具 
 * @module
 */

//判斷有無數值
export const hasVal=(val)=>(!(val===null || typeof val === 'undefined' || val === '' || val===false))

//數值轉字串
export const toStr=(number)=>(
	hasVal(number)
		? number+''
		: number
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

const conditionLevel1=(val)=>{
	return !(val===null || typeof val === 'undefined')
}
const conditionLevel2=(val)=>{
	return !(val===null || typeof val === 'undefined' || val === '')
}
const conditionLevel3=(val)=>{
	return !(val===null || typeof val === 'undefined' || val === '' || val==='-1' || val===-1)
}

//過濾掉空欄位
export const filterEmptyField=(item, conditionLevel='1')=>{
	if(hasVal(item)){
		let keys = Object.keys(item)
		if(hasVal(keys)){
			let result = {}
			let fun = conditionLevel1
			switch(conditionLevel){
					case '1':
						fun = conditionLevel1
						break
					case '2':
						fun = conditionLevel2
						break
					case '3':
						fun = conditionLevel3
						break
			}
			keys.forEach((key)=>{
				let val = item[key]
				fun(val) && (result[key] = val)
			})
			return result
		}else{
			return item
		}
	}else{
		return item
	}
}

const generalUtil= {
	hasVal : hasVal,
	toStr : toStr,
	toInt : toInt,
	clearFloat : clearFloat,
	filterInt : filterInt,
	filterFloat : filterFloat,
	filterEmptyField : filterEmptyField
}

if(!window.generalUtil){
		window.generalUtil = generalUtil
}

export default generalUtil
