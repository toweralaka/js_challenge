function steamrollArray(arr) {
  if(arr.length == 0) {
    return arr
  }
  //if the first index is an array, flatten it and add it to other flattened index
  if(Array.isArray(arr[0])) {
    return (steamrollArray(arr[0])).concat(steamrollArray(arr.slice(1,)))
  }
  //return first index joined to other indices
  return (arr.slice(0,1)).concat(steamrollArray(arr.slice(1,)))
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));