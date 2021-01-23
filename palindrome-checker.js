function palindrome(str) {
  let myStr = str.replace(/(\W+)|(\_)|(\s+)/g, '');
  let lowStr = myStr.toLowerCase();
  let anArr = [];
  for(let i=lowStr.length-1; i>=0; i--) {
    anArr.push(lowStr[i])
  }
  let finale = anArr.join('');  
  if(finale === lowStr) {
    return true
  } else {
    return false
  }
}

console.log(palindrome("_eye"))