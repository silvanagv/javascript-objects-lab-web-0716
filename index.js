  var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
  }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {

var new_object = (JSON.parse(JSON.stringify(object)));
  delete new_object[key]
  return new_object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
