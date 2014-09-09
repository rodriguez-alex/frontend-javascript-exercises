module.exports.getKeys = function(theObj){
  var theObj = theObj,
      returnArray = [];

  for(key in theObj){
    returnArray.push(key);
  }

  return returnArray;
};

module.exports.getValues = function(theObj){
  var theObj = theObj,
      returnArray = [];

  for(key in theObj){
    returnArray.push(theObj[key]);
  }

  return returnArray;
};

module.exports.objectToArray = function(theObj){
  var theObj = theObj,
      returnArray = [];

  for(key in theObj){
    returnArray.push(key + " is " + theObj[key]);
  }

  return returnArray;
};