module.exports.reversePlusOne = function(theArray){
  if(theArray.length >= 2){
    var newArray = [1];
    var arrayLength = theArray.length;

    for(var i = arrayLength-1; i >= 0; i--){
      var currentNumber = theArray[i];
      newArray.push(currentNumber);
    }

    return newArray;
  }
  else {
    return false;
  }
};

module.exports.plusesEverywhere = function(theArray){
  var theString = "";

  if(theArray.length >= 2){
    for(var i = 0; i < theArray.length; i++){
      theString += theArray[i];

      if(i !== theArray.length-1){
        theString += '+';
      }
    }
    return theString;
  }
  else {
    return false;
  }
};

module.exports.arrayQuantityPlusOne = function(theArray){
  return theArray.length + 1;
};