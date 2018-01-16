var recipes = {}

function updateObjectWithKeyAndValue(obj,key,val){
  var newObj = {}


  return Object.assign(newObj,obj,{[key]: val})
}

function destructivelyUpdateObjectWithKeyAndValue(obj,key,val){
  obj[key]=val
  return obj
}



function deleteFromObjectByKey(obj,key){
  delete obj[key]
  return obj
}
function destructivelyDeleteFromObjectByKey(){}
