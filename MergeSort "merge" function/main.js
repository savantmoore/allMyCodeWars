function mergesorted(a, b){
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while(indexLeft<a.length && indexRight< b.length){
    if(a[indexLeft] < b[indexRight]){
      result.push(a[indexLeft])
      indexLeft++;
    }else{
      result.push(b[indexRight]);
      indexRight++
    }
  }
  return result.concat(a.slice(indexLeft).concat(b.slice(indexRight)));
}
mergesorted([1,2],[3])
