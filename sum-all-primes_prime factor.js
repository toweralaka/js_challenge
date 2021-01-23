function sumPrimes(num) {
  let myArr = [];
  for(let i=2; i<=num; i++) {
    for(let j=2; j<=i; j++) {
      if(i!=j && i%j == 0) {
        break;
      } else if(j == i) {
        myArr.push(i)
      }
    }
  }
  console.log(myArr);
  return myArr.reduce((sum, elem) => sum + elem, 0);
}

console.log(sumPrimes(977));