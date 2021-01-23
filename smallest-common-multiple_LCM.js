function myCompare(arr1, arr2) {
   if (arr1.length !== arr2.length) {
      return false
   } else {
      for (let i = 0; i < arr1.length; i++){
         if (arr1[i] !== arr2[i]){
            return false
         } else {
            continue
         }
      }
   }
   return true
}
function smallestCommons(arr) {
  let factors = [];
  let myArr = arr.sort((a,b) => a-b);
  let newArr = [];
  let newArr2;
  //get the full array
  for(let i=myArr[0]; i<=myArr[1]; i++) {
    newArr.push(i)
  }
  for(let j=2; j<=myArr[1]; j++) {
    let myCheck = newArr.filter(elem => elem>1);
    if(myCheck.length == 0) {
      break;
    } else {
      let buff = [...newArr]
      newArr2 = newArr.map(function(elem) {
          if(elem%j == 0){
            return elem / j
            } else {
              return elem
            }
        })
      if(myCompare(buff, newArr2) == false) {
        factors.push(j)
        while(myCompare(buff, newArr2) == false) {
          buff = [...newArr2]
          newArr2 = buff.map(function(elem) {
            if(elem%j == 0){
              return elem / j
              } else {
                return elem
              }
          })
          if(myCompare(buff, newArr2) == false) {
          factors.push(j)
          }
        }
      }
      if(myCompare(newArr, newArr2) == false) {
        newArr = [...newArr2]
      }
    }
  }
  return factors.reduce((sum, elem) => sum * elem, 1)
}


console.log(smallestCommons([1, 5]));