module.exports.formLetter = function(firstName, senderName, message) {
  return "Hello " + firstName + ",\n\n" + message + "\n\nSincerely,\n" + senderName;
};

//I feel like this can improve
module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {

  var firstWord = bigString.substring(startA, endA);
  var secondWord = bigString.substring(startB, endB);

  return firstWord.concat(secondWord);
};

module.exports.findFirstMatch = function(text, searchString) {
  return text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
  return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
  var searchStringLength = searchString.length;
  var posFound = text.indexOf(searchString);
  var afterPosFound = posFound + searchStringLength;
  var lastPosFound = text.lastIndexOf(searchString);

  return text.substring(afterPosFound, lastPosFound);
};