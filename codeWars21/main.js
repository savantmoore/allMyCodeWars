function songDecoder(str){
  str = str.split('WUB').filter( (x) => x !== '').join(' ');
  console.log(str);
  return str;
}
