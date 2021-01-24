function myShift() {
  let alphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let letObj = {};
  let j = 13;
  for(let i=0; i<alphas.length; i++) {
    if(j >= alphas.length){
      j = 0
    }
    let dVar = alphas[i]
    let rot = alphas[j]
    letObj[dVar] = rot;
    j++;
  }
  
  return letObj;
}
function rot13(str) {
  let myArr = [];
  for(let i=0; i<str.length; i++) {
    let myChar = str[i];
    if(myShift()[myChar]) {
      myArr.push(myShift()[myChar])
    } else {
      myArr.push(myChar)
    }
  }
  return myArr.join('')
}

console.log(rot13("SERR PBQR PNZC"));