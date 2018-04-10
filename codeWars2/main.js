function order(words){
  //define an empty result arr
  //define an array with strings 1-9
  //turn string into an array of words
  //iterate through the number arr
    //iterate through the string arr
      //if word includes #
        //push word to result arr
  //return joined result arr

  var resultArr = [];
  var numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var stringArr = words.split(" ");
  for (var i = 0; i < numArr.length; i++) {
    for (var j = 0; j < stringArr.length; j++) {
      if (stringArr[j].includes(numArr[i])) {
        resultArr.push(stringArr[j]);
      }
    }
  }
  return resultArr.join(" ");
}

order("is2 Thi1s T4est 3a"); // "Thi1s is2 3a T4est"
