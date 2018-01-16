var recipes = {}

function updateObjectWithKeyAndValue(obj,key,val){
  var newObj = Object.assign(obj,{[key]: val})
  return newObj
}


function deleteFromObjectByKey(obj,key){
  delete obj[key]
  return obj
}
function destructivelyUpdateObjectWithKeyAndValue(){}
function destructivelyDeleteFromObjectByKey(){}
