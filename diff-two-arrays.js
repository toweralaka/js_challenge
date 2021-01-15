function diffArray(arr1, arr2) {
  var newArr = [];
  let diff1 = arr1.filter(elem => arr2.indexOf(elem) === -1)
  let diff2 = arr2.filter(elem => arr1.indexOf(elem) === -1)
  newArr = diff1.concat(diff2);
  return newArr
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);