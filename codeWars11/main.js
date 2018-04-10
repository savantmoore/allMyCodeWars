function count(a){
 var result = {};
 for(var i in a){
  if(result[a[i]] == undefined) result[a[i]] = 0;
  result[a[i]]++;
 }
 return result;
}
