function destroyer(arr) {
  let myArr = [...arr];
  for(let i = 1; i < arguments.length; i++) {
    myArr = myArr.filter((elem) => elem != arguments[i])
    }
    return myArr
  }

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));