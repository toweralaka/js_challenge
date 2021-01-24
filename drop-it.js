function dropElements(arr, func) {
  let myArr = [...arr]
  for(let i=0; i<arr.length; i++) {
    if(func(arr[i]) == true) {
      break;
    } else {
      let elem = myArr.indexOf(arr[i])
      myArr.splice(elem, 1);
    }
  }
  return myArr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));