module.exports.stream = function(bool1, bool2){
  var bool1 = bool1;
  var bool2 = bool2;

  while(bool1() === true){
    bool2();
  }
};

module.exports.sumNumbers = function(theArray){
  var sumOfNums = 0;
  var i = 0;

  while(i < theArray.length) {
    sumOfNums += theArray[i];
    i++;
  }

  return  sumOfNums;
};

