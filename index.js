var recipies = {key: "value"}

 function updateObjectWithKeyAndValue(recipes, key, value){
   recipes[key] = value
  return recipes
 }

function deleteFromObjectByKey(recipes, key){
  delete recipes[key]
  return recipes
}
