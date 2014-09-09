module.exports.sumNumbers = function(theArray){

  var theArray = theArray;

  var totalNum = 0;

  for(var i = 0; i < theArray.length; i++){
    totalNum += theArray[i];
  }

  return totalNum;
};

module.exports.splitAndLowerCaseString = function(theString){

  lowerCasedString = theString.toLowerCase(),
  splitString = lowerCasedString.split(',');

  return splitString;


};

module.exports.addIndex = function(theArray){
  var theArray = theArray,
      returnArray = []

  for(var i = 0; i < theArray.length; i++) {
    returnArray.push(i + " is " + theArray[i]);
  }

  return returnArray;
};
