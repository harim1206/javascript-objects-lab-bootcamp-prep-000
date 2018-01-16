var recipes = {}

function updateObjectWithKeyAndValue(obj,key,val){
  Object.assign(newObj,{[key]: val})
  return newObj
}


function deleteFromObjectByKey(obj,key){
  delete obj[key]
  return obj
}
function destructivelyUpdateObjectWithKeyAndValue(){}
function destructivelyDeleteFromObjectByKey(){}
