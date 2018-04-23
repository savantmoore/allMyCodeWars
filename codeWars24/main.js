function reverseWords(str){
  var splitWords = str.split(" ");
  var newArray = splitWords.map(function(word){
    let newStr = '';
    for(var i = word.length-1; i >= 0; i--) {
      newStr += word[i];
    }
    return newStr
  })
  return newArray.join(' ');
}

reverseWords('This is an example');
