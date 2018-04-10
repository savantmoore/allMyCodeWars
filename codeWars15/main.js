function alphabetPosition(text) {
  return text.toLowerCase().replace(/[^a-z]/g, '')
        .replace(/./g, ([c]) => ' ' + (c.charCodeAt(0) - 'a'.charCodeAt(0) + 1))
        .substr(1);
}

console.log(alphabetPosition('n8_ovuu&'));
