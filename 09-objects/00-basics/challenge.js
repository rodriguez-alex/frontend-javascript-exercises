module.exports.createCourse = function(title, duration, students){
  return {
    title: title,
    duration: duration,
    students: students
  };
};

module.exports.addProperty = function(teacher, prop, student){
  var teacher = teacher;

  if(!teacher.hasOwnProperty(prop)){
    teacher[prop] = student;
  }

  return teacher;
};

module.exports.formLetter = function(obj){
  return "Hello " + obj.recipient + ",\n\n" + obj.msg + "\n\nSincerely,\n" + obj.sender;;
};

module.exports.canIGet = function(product, moneyOnHand){

  if((product === "Apple Sticker" && moneyOnHand >= 1) ||
    (product === "MacBook Air" && moneyOnHand >= 999) ||
    (product === "MacBook Pro" && moneyOnHand >= 1299) ||
    (product === "Mac Pro" && moneyOnHand >= 2499)){
    return true;
  }
  else {
    return false;
  }
};