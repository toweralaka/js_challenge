function spinalCase(str) {
  //positive look ahead (?=[A-Z])
  let str2 = str.split(/(?=[A-Z])|\W|_/)
  let str3 = str2.map(elem => elem.toLowerCase());
  let nextstr = str3.join('-');
  return nextstr;
}

spinalCase('This Is Spinal Tap');

