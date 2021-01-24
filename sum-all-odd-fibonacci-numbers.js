function sumFibs(num) {
  let myNum;
  let a = 1;
  let b = 1;
  myNum = a + b;
  for(let d=0; d<=num;) {
    d = a + b;
    a = b;
    b = d;
    if(d <= num) {
      if(d%2 != 0) {
        myNum += d
      }
    }
  }
  return myNum;
}

console.log(sumFibs(4));