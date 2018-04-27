function countSmileys(arr) {
  return arr.filter(x => /^[;:][-~]?[)D]$/.test(x)).length;
}

console.log(countSmileys([])); //, 0);
console.log(countSmileys([':D',':~)',';~D',':)'])); //, 4);
console.log(countSmileys([':)',':(',':D',':O',':;'])); //, 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); //, 1);
