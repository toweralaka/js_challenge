function translatePigLatin(str) {
  let vowelReg = /a|e|i|o|u/;
  let testStr = str[0];
  let vowelTest = vowelReg.test(testStr)
  let consreg = /^[b-df-hj-np-tv-z]{1,}/i;
  let consmatch = str.match(consreg);
  if(vowelTest == true) {
    return str + "way"
  } else {
    let myStr = str.replace(consreg, '')
    return myStr + consmatch + "ay"
  }
}

console.log(translatePigLatin("consonant"));