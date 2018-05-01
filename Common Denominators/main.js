function convertFrac(lst) {
  var denomArr = lst.map(function(e) {
    return e[1]
  }).sort(function(a, b) {
    return a - b
  })
  var bigDenom = denomArr[denomArr.length - 1]
  var flag = false
  var i = 1
  var returnString = ''
  while (flag === false) {
    var denomChecker = 0
    for (var j = 0; j < denomArr.length; j++) {
      denomChecker += (bigDenom * i) % denomArr[j]
    }
    if (denomChecker === 0) {
      flag = true;
      lst.forEach(function(e) {
        e[0] *= ((bigDenom * i) / e[1]);
        e[1] = bigDenom * i
      });
    } else {
      i++;
    }
  }
  lst.forEach(function(e) {
    returnString += "(" + e[0] + "," + e[1] + ")"
  })
  return returnString
}
