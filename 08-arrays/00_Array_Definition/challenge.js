module.exports.newArray = function(){
  var tempArray = [];
  for(var i = 0; i < arguments.length; i++){
    tempArray.push(arguments[i]);
  }
  return tempArray;
};

module.exports.firstAndLast = function(theArray){
  var tempArray = [];

  for(var i = 0; i < theArray.length; i++){
    if(i === 0){
      tempArray.push(theArray[i]);
    }
    else if (i === theArray.length -1){
      tempArray.push(theArray[i]);
    }
  }
  return tempArray;
};