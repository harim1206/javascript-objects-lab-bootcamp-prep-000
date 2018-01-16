var recipes = {}

function updateObjectWithKeyAndValue(obj,key,val){
  var newObj = {}
  Object.assign(newObj,obj,{[key]: val})
  console.log(obj)
  console.log(newObj)
  return newObj
}


function deleteFromObjectByKey(obj,key){
  delete obj[key]
  return obj
}
function destructivelyUpdateObjectWithKeyAndValue(){}
function destructivelyDeleteFromObjectByKey(){}
