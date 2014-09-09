module.exports.copy = function(theObj){

  var theObj = theObj;
      newObj = {};

  for(key in theObj){
    newObj[key] = theObj[key];
  }

  return newObj;
};

module.exports.extend = function(theObj1, theObj2){

  var theObj1 = theObj1,
      theObj2 = theObj2;

  for(var key in theObj2){
    theObj1[key] = theObj2[key];
  }

  return theObj1;
};

module.exports.hasElems = function(theObj, theArray){

  var theObj = { name: "Computer", cost: "$1,000" },
      theArray = theArray,
      theObjPropArray = [];

      //3rd test
      // ['name', 'cost', 'bio']

    if(theArray.length === 0){
      return true;
    }

    //will loop through twice
    for(var key in theObj){
      theObjPropArray.push(key);
    }

    var sortedObjArray = theObjPropArray.sort(),
        sortedOrigArray = theArray.sort();

      for(var i = 0; i < theArray.length; i++){
        if(sortedOrigArray[i] !== theObjPropArray[i]){
          return false;
        }
      }

    return true;

};