function uniteUnique(arr) {
  let myArr = []
  for(let i=0; i<arguments.length; i++) {
    for(let j=0; j<arguments[i].length; j++) {
      let myVar = arguments[i][j];
      if(myArr.indexOf(myVar) == -1) {
        myArr.push(myVar);
      }
    }
  }
  return myArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));