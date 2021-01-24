function truthCheck(collection, pre) {
  let myTrue = true;
  for(let i=0; i<collection.length; i++) {
    if(collection[i].[pre]) {
      myTrue = true;
    } else {
      myTrue = false;
      break;
    }
  }
  return myTrue;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));