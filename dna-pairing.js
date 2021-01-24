function pairElement(str) {
  let myArr = [];
  let inArr;
  for(let i=0; i<str.length; i++) {
    let dnaPair = str[i];
    switch(dnaPair) {
    case "A":
      inArr = [dnaPair, "T"];
      myArr.push(inArr);
      break;
    case "T":
      inArr = [dnaPair, "A"];
      myArr.push(inArr);
      break;
    case "C":
      inArr = [dnaPair, "G"];
      myArr.push(inArr);
      break;
    case "G":
      inArr = [dnaPair, "C"];
      myArr.push(inArr);
      break;
    }
  }
  return myArr;
}

console.log(pairElement("GCG"));