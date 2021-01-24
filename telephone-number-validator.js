function telephoneCheck(str) {
  let myReg = /[^-\(\)\s0-9]/
  let unwanted = myReg.test(str);
  console.log(unwanted)
  let myStr = str.split(/\D+/).join('')
  if(Number(str[str.length-1]) != NaN && unwanted == false) {
    if(str.includes('(') == str.includes(')')) {
      if(myStr.length == 11) {
        console.log(11)
        if(Number(str[0]) != 1) {
          return false
        }
        return true;
      } else if(myStr.length == 10) {
        if(str.indexOf('(') == 0 && str.indexOf(')') != 4) {
          return false
        }  else {
          return true
        }
      } else {
        return false;
      }
    } else {
      return false
    }
  } else {
    return false
  }
  // return phone
}

console.log(telephoneCheck("-1 (757) 622-7382"));
// telephoneCheck("-1 (757) 622-7382") should return false
// telephoneCheck("(555)5(55?)-5555") 