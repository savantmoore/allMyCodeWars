// complete the function
function solution(string) {
  var stringArr = string.split('');
  var newString = '';
  for (i = 0; i < stringArr.length; i++) {
    if (/[A-Z]/.test(stringArr[i]) === true) {
      newString += ' ' + stringArr[i];
    } else {
      newString += stringArr[i];
    }
  }
  return newString;
}

console.log(solution('camelCasing')) // Should return 'camel Casing'
console.log(solution('breakingCamelCasing')) // Should return 'breaking Camel Casing'
