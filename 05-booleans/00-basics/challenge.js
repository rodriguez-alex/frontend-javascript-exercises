module.exports.inBetween = function(lower, middle, upper) {
  return (lower < middle) && (middle < upper);
};

module.exports.equalStrings = function(stringOne, stringTwo) {
  return stringOne === stringTwo;
};

module.exports.notEqual = function(one, two) {
  return one !== two;
};

module.exports.outsideRanges = function(number) {
  if(number >= 10 && number <= 20){
    return false;
  }
  else if(number >= 43 && number <= 75){
    return false;
  }
  else if(number >=2 && number <=5){
    return false;
  }
  else {
    return true;
  }
};

module.exports.nameAndPrice = function(name, price) {
  if((name === 'NYTimes' || name === 'LATimes') && price >= 1){
    return true;
  }
  else {
    return false;
  }
};