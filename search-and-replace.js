function myReplace(str, before, after) {
  let myAfter;
  if(before[0] == before[0].toUpperCase()) {
    myAfter = after.replace(after[0], after[0].toUpperCase())
  } else if(before[0] == before[0].toLowerCase()) {
    myAfter = after.replace(after[0], after[0].toLowerCase())
  }
  return str.replace(before, myAfter);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");