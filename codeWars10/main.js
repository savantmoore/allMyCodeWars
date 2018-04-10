function high(x){
  var words = x.split(' '),
      mx = 0,
      res = '';
  for(let i = 0; i < words.length; i++){
    var s = words[i],
        val = 0;
    for(let j = 0; j < s.length; j++){
      val += (s.charCodeAt(j) - 96);
    }
    if(val > mx){
      mx = val;
      res = s;
    }
  }
  return res;
}
