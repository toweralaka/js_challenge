function fearNotLetter(str) {
  let myAlpha = "abcdefghijklmnopqrstuvwxyz";
  let myRslt;
  let start = str[0]
  let j=myAlpha.indexOf(start)
  for(let i=j; i<myAlpha.length; i++) {
    if(!str.includes(myAlpha[i])) {
      myRslt = myAlpha[i];
      break;
    } else {
      myRslt = undefined;
    }
  }
  return myRslt
}

console.log(fearNotLetter("abce"));