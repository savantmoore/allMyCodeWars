function kebabize(str) {
  let upperCase = 'ABCDEGFHIJKLMNOPQRSTUVWXYZ';
  let alphabet = upperCase + upperCase.toLowerCase();
  let answerStr = '';

  for (var i = 0; i <str.length; i++){
    if (upperCase.indexOf(str[i]) !== -1){
      answerStr += '-' + str[i].toLowerCase();
    } else if(alphabet.indexOf(str[i]) !== -1){
      answerStr += str[i].toLowerCase();
    }
  }

    if (answerStr[0] === '-'){
      return answerStr.slice(1);
    }
  return answerStr;
}

kebabize('Dog');



kebabize('CAmelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
