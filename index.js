var recipies = {}

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, { key: [value] })

}
