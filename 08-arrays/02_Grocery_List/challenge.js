module.exports.addItem = function(newItem, theArray){
  var newArray = [];

  for(var i = 0; i < theArray.length; i++){
    if(!(theArray[i] === newItem)){
      newArray.push(theArray[i]);
    }
  }

  newArray.push(newItem);

  return newArray;
};

module.exports.reverseSortedList = function(theArray){
  var sortedArray = theArray.sort();
  var arrayLength = theArray.length;
  var reverseArray = [];

  for(var i = arrayLength-1; i >= 0; i--){
    reverseArray.push(sortedArray[i]);
  }

  return reverseArray;
};