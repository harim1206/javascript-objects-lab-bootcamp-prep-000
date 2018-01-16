var recipes = {}

function updateObjectWithKeyAndValue(obj,key,val){
  obj[key]=val
  return obj
}
function deleteFromObjectByKey(obj,key){
  delete obj[key]
  return obj
}
function destructivelyUpdateObjectWithKeyAndValue(){}
function destructivelyDeleteFromObjectByKey(){}
