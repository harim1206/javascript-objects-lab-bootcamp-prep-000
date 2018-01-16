var recipes = {}

function updateObjectWithKeyAndValue(obj,key,val){
  var newObj = {}


  return Object.assign(newObj,obj,{[key]: val})
}


function deleteFromObjectByKey(obj,key){
  delete obj[key]
  return obj
}
function destructivelyUpdateObjectWithKeyAndValue(){}
function destructivelyDeleteFromObjectByKey(){}
