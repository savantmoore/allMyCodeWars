function mixedFraction(s){
  // array with fraction parts as numbers
  var fracParts = s.split('/').map(Number);
  // divide by 0
  if (fracParts[1] == 0) {
    throw new RangeError('Error: Divide by zero');
  // integer number
} else if (fracParts[0]/fracParts[1]%1 == 0) {
    return (fracParts[0]/fracParts[1]).toString();
  // mixed fraction
  } else {
    // whole part of the mixed fraction
    var whole = Math.trunc(fracParts[0]/fracParts[1]);
    // dividend of remainder of mixed fraction
    var dividend = Math.abs(fracParts[0])-Math.abs(whole)*Math.abs(fracParts[1]);
    // greatest common denominator
    var gcd = function (a, b) {
      return (!b) ? a : gcd(b, a % b);
    };
    var gcdNum = Math.abs(gcd(dividend, fracParts[1]));
    // reduce remainder to smallest fraction possible
    var gcdFrac = dividend/gcdNum + '/' + Math.abs(fracParts[1])/gcdNum;
    // return mixed fraction
    if (fracParts[0]/fracParts[1] < 0 && whole == 0) {
      return '-' + gcdFrac;
    } else if (fracParts[0]/fracParts[1] > 0 && whole == 0) {
      return gcdFrac;
    } else {
      return whole + ' ' + gcdFrac;
    }
  }
}
