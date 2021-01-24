function addTogether() {
  let myArr = arguments;
  if(myArr.length > 1) {
    if(typeof(myArr[0]) == 'number' && typeof(myArr[1]) == 'number') {
    return myArr[0] + myArr[1]
    } else {
      return undefined
    }
  } else if(myArr.length == 1){
    if(typeof(myArr[0]) != 'number') {
      return undefined
    } else {
      return function(y) {
        if(typeof(myArr[0]) == 'number' && typeof(y) == 'number') {
          return myArr[0] + y
          }
      }
    }
  }
}
console.log(typeof(6))
console.log(addTogether(2));
